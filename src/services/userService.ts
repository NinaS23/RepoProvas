import { IuserData, TuserData } from "../types/userTypes";
import bcryt from "bcrypt";
import * as userRepository from "../repositories/userRepository";
import * as errorTypes from '../utils/errorUtils';

export async function createUser(user: IuserData) {
    await validateEmail(user.email);
    await validatePassword(user.password, user.passwordRef);
    const encodePass = await bcryptedPassword(user.password)
    const userData: TuserData = {
        email: user.email,
        password: encodePass
    }

    await userRepository.insertUserData(userData);
}

async function validateEmail(email: string) {
    const isEmailExistent = await userRepository.findUserName(email);
    if (isEmailExistent) throw errorTypes.conflictError("email alredy exists");
}

async function validatePassword(password: string, passwordRef: string) {
    if (password !== passwordRef) throw errorTypes.wrongSchemaError("passwords do not match");
}

async function bcryptedPassword(password: string) {
    const SALT = 10;
    const encodePassword = bcryt.hashSync(password, SALT);
    return encodePassword
}