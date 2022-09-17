import app from "../src/app/app";
import prisma from "../src/config/database";
import supertest from "supertest";
import * as factory from "./factory/userFactory";


 
 
describe("test route sing-in", () => {

    it("create user with the correct schema, should returns 201", async () => {
        const createdUser = factory.createUser(false);
        const result = await supertest(app).post("/sign-up").send(createdUser);
        expect(result.statusCode).toBe(201);
        
    });

    it("create user with the incorrect schema, should returns 422", async () => {
        const createdUser = factory.createUser(true);
        const result = await supertest(app).post("/sign-up").send(createdUser);
        expect(result.statusCode).toBe(422);

    });

    it("creating user with a existent email, should returns 409", async () => {
        const createdUser = factory.createUser(false);
        const result = await supertest(app).post("/sign-up").send(createdUser);
        expect(result.statusCode).toBe(409);

    }); 

});

describe("test route sing-up", () => {
   
        it("login user with correct schema", async () => {
            const user = factory.loginUser(2);
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(200);
            
        });
    
         it("login user with wrong email, should returns 404", async () => {
            const user = factory.loginUser(1);
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(404);
    
        }); 

   
        it("login user with wrong password, should returns 401", async () => {
            const user = factory.loginUser(3);
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(401);
    
        }); 
    });

afterAll(async () => {
    await prisma.$disconnect();
});