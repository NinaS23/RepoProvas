import app from "../src/app/app";
import prisma from "../src/config/database";
import supertest from "supertest";
import * as factory from "./factory/userFactory";
import { STATUS_CODES } from "http";


 beforeEach(async () => {
    prisma.$executeRaw`TRUNCATE TABLE user RESTART IDENTITY CASCADE;`
});
 
describe("test route sing-in", () => {
//tem so que mudar lá o email e vai 
    it("create user with the correct schema, should returns 201", async () => {
        const createdUser = factory.createUser(false);
        console.log(createdUser)
        const result = await supertest(app).post("/sign-up").send(createdUser);
        expect(result.statusCode).toBe(201);
        
    });

    it("create user with the incorrect schema, should returns 422", async () => {
        const createdUser = factory.createUser(true);
        const result = await supertest(app).post("/sign-up").send(createdUser);
        console.log(result.statusCode)
        expect(result.statusCode).toBe(422);

    });

});

 
describe("test route sing-up", () => {
    //tem so que mudar lá o email e vai 
        it("login user with correct schema,should returns 422", async () => {
            const user = factory.loginUser(2);
            const result = await supertest(app).post("/sign-in").send(user);
            console.log(result.statusCode)
            expect(result.statusCode).toBe(200);
            
        });
    
         it("login user with wrgon schema, should returns 422", async () => {
            const user = factory.loginUser(1);
    
            const result = await supertest(app).post("/sign-in").send(user);
            console.log(result.statusCode)
            expect(result.statusCode).toBe(404);
    
        }); 
    
    });

afterAll(async () => {
    await prisma.$disconnect();
});