import app from "../src/app/app";
import prisma from "../src/config/database";
import supertest from "supertest";
import * as factory from "./factory/userFactory";


beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
});

describe("test route sing-in", () => {

    it("create user with the correct schema, should returns 201", async () => {
        const createdUser = factory.createUser(true);
        const result = await supertest(app).post("/sign-up").send(createdUser);
        expect(result.statusCode).toBe(201);
        
    });

    it("create user with the incorrect schema, should returns 422", async () => {
        const createdUser = factory.wrongInputSchema();
        const result = await supertest(app).post("/sign-up").send(createdUser);
        expect(result.statusCode).toBe(422);

    });

    it("create user with a email alredy existent , should returns 409", async () => {
        const createdUser = factory.createUser();
        const sendCreatedUser = await supertest(app).post("/sign-up").send(createdUser);
        expect(sendCreatedUser.statusCode).toBe(201);

        const insertionTwo = await supertest(app).post("/sign-up").send(createdUser);
        expect(insertionTwo.statusCode).toBe(409);

    });

});

describe("test route sing-in", () => {
    
    it("login  user with correct schema, should returns 200 and token", async () => {
        const userCreate = factory.createUser();
        const insertion = await supertest(app).post("/sign-up").send(userCreate);
        expect(insertion.statusCode).toBe(201);

        const userLogin = factory.loginUser();
        const login = await supertest(app).post("/sign-in").send(userLogin);
        expect(login.statusCode).toBe(200);
        expect(login).not.toBeNull();
    });

    it("login user with incorrect schema, should returns 422", async () => {
        const userSchema = factory.wrongLoginSchema();
        const result = await supertest(app).post("/sign-in").send(userSchema);
        expect(result.statusCode).toBe(422);
    });

    it("login user with incorrect password, should return 401", async () => {
        const userCreate = factory.createUser();
        const sendUserCreated = await supertest(app).post("/sign-up").send(userCreate);
        expect(sendUserCreated.statusCode).toBe(201);
        
        const userLogin = factory.wrongLoginPassword();
        const login = await supertest(app).post("/sign-in").send(userLogin);
        expect(login.statusCode).toBe(401);
    });

    it("login a user that does not exist returns 404", async () => {
        const userLogin = factory.loginUser(true);
        const login = await supertest(app).post("/sign-in").send(userLogin);
        expect(login.statusCode).toBe(404);
    });
});

afterAll(async () => {
    await prisma.$disconnect();
});