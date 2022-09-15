import { faker } from "@faker-js/faker";
import { TuserData, IuserData } from "../../src/types/userTypes";

const EMAIL_TEST = "anamaria@ia.com";
const PASSWORD_TEST = "12345";

export function createUser(random: boolean) {
  if (random === true) {
    return <IuserData>{
      email: faker.internet.email(),
      password: PASSWORD_TEST,
      passwordRef: "!234"
    }
  } else {
   return  <IuserData>{
      email: EMAIL_TEST,
      password: PASSWORD_TEST,
      passwordRef: PASSWORD_TEST
    };
  }

}

export function loginUser(random: boolean = false) {
    return random
      ? {
          email: faker.internet.email(),
          password: PASSWORD_TEST,
        }
      : {
          email: EMAIL_TEST,
          password: PASSWORD_TEST,
        };
  }
