import { faker } from "@faker-js/faker";
import { TuserData, IuserData } from "../../src/types/userTypes";

const EMAIL_TEST = "wallee@cardCaptors.com";
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

export function createUserForTests() {
  
    return <IuserData>{
      email: "walle@hannears.com",
      password: PASSWORD_TEST,
      passwordRef: PASSWORD_TEST
    }
  

}

export function loginUserForTests() {
  return <IuserData>{
    email: "walle@hannears.com",
    password: PASSWORD_TEST,
   
  }
}

export function loginUser(random:number) {
    if( random === 1){
         return  {
          email: faker.internet.email(),
          password: PASSWORD_TEST,
        }
    } else if(random === 2) {
      return  {
        email: EMAIL_TEST,
        password: PASSWORD_TEST,
      }
    }else{
      return  {
        email: EMAIL_TEST,
        password: faker.random.numeric(),
      }
    }
  }
