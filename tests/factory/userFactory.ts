import { faker } from "@faker-js/faker";
import { TuserData, IuserData } from "../../src/types/userTypes";

const EMAIL_TEST = "margoyt@margot.com";
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

export function loginUser(random) {
    if( random === true){
         return  {
          email: faker.internet.email(),
          password: PASSWORD_TEST,
        }
    } else {
      return  {
        email: EMAIL_TEST,
        password: PASSWORD_TEST,
      }
    }
  }
