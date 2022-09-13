import * as userRepository from "../repositories/userRepository";
import { notFoundError } from "./errorUtils";


export async function findUserById(id: number) {
    const user = await userRepository.findUserById(id);
    if (!user) throw notFoundError('User not found');
  
    return user;
  }