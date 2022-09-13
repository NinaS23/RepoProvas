import { IuserData, TuserData } from "../types/userTypes";
import { user } from "@prisma/client";
import bcryt from "bcrypt";
import Jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository";
import * as errorTypes from '../utils/errorUtils';

export async function createUser(user: IuserData) {
    await validateEmail(user.email, "insert");
    await validatePassword(user.password, user.passwordRef);
    const encodePass = await bcryptedPassword(user.password)
    const userData: TuserData = {
        email: user.email,
        password: encodePass
    }

    await userRepository.insertUserData(userData);
}

async function validateEmail(email: string, type: string) {
    const isEmailExistent = await userRepository.findUserName(email);
    if (isEmailExistent && type === "insert") throw errorTypes.conflictError("email alredy exists");
    if (!isEmailExistent && type === "select") throw errorTypes.notFoundError("email or password incorrect");
    return isEmailExistent;
}

async function validatePassword(password: string, passwordRef: string) {
    if (password !== passwordRef) throw errorTypes.wrongSchemaError("passwords do not match");
}

async function bcryptedPassword(password: string) {
    const SALT = 10;
    const encodePassword = bcryt.hashSync(password, SALT);
    return encodePassword
}

export async function loginUser(user: TuserData) {
    const userData = await validateEmail(user.email, "select");
    await decryptPassword(userData, user.password);
    const token = await createToken(userData);
    return {
        token,
        userId: userData.id
    }
}

async function decryptPassword(user: TuserData, password: string) {
    const decodePass = bcryt.compareSync(password, user.password);
    if (!decodePass) throw errorTypes.unauthorizedError("email or password incorrect");
}

async function createToken(user: user) {
    const userId = user.id;
    const secretKey = process.env.JWT_SECRET;
    const config = { expiresIn: 60 * 60 * 6 };
    const token = Jwt.sign({ userId }, secretKey, config);
    return token;
}


export async function findUserById(id: number) {
    const user = await userRepository.findUserById(id);
    if (!user) throw errorTypes.notFoundError('User not found');
  
    return user;
  }