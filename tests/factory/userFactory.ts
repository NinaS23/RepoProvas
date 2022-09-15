import {faker} from "@faker-js/faker";
import { TuserData, IuserData } from "../../src/types/userTypes";

const EMAIL_TEST = "madu@madu.com";
const PASSWORD_TEST = "12345";

export function createUser(random: boolean = false) {
    return random
      ? <IuserData>{
        email: faker.internet.email(),
        password: PASSWORD_TEST,
        passwordRef: PASSWORD_TEST
        }
      : <IuserData>{
        email: EMAIL_TEST,
        password: PASSWORD_TEST,
        passwordRef: PASSWORD_TEST    
        };
  }

export function loginUser(random: boolean = false) {
    return random
      ? <TuserData>{
          email: faker.internet.email(),
          password: PASSWORD_TEST,
        }
      : <TuserData>{
          email: EMAIL_TEST,
          password: PASSWORD_TEST,
        };
  }
