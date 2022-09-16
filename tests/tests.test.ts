import app from "../src/app/app";
import prisma from "../src/config/database";
import supertest from "supertest";
import * as factory from "./factory/userFactory";
import * as testFactory from "./factory/testFactory";

beforeEach(async () => {
    prisma.$executeRaw`TRUNCATE TABLE user CASCADE;`
});

describe("test route POST /test", () => {

    it("send a test with the correct schema", async () => {
        const user = factory.loginUser(2);
        const result = await supertest(app).post("/sign-in").send(user);
        expect(result.statusCode).toBe(200);
        const token = result.body.token;
        expect(token).not.toBeNull();


        const testData = testFactory.createFakerTestData(false);
        const testResult = await supertest(app).post("/test").send(testData).set("Authorization", `Bearer ${token}`);
        expect(testResult.statusCode).toBe(201);

    });

    it("send a test with the incorrect schema", async () => {
        const user = factory.loginUser(2);
        const result = await supertest(app).post("/sign-in").send(user);
        expect(result.statusCode).toBe(200);
        const token = result.body.token;
        expect(token).not.toBeNull();


        const testData = testFactory.createFakerTestData(true);
        const testResult = await supertest(app).post("/test").send(testData).set("Authorization", `Bearer ${token}`);
        expect(testResult.statusCode).toBe(404);

    });


    it("send a test without the Headers", async () => {
        const user = factory.loginUser(2);
        const result = await supertest(app).post("/sign-in").send(user);
        expect(result.statusCode).toBe(200);
        const token = result.body.token;
        expect(token).not.toBeNull();


        const testData = testFactory.createFakerTestData(false);
        const testResult = await supertest(app).post("/test").send(testData);
        expect(testResult.statusCode).toBe(401);

    });



    describe("test route GET /tests", () => {

        it("get with the correct request and send headers , should return 200", async () => {
            const user = factory.loginUser(2);
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(200);
            const token = result.body.token;
            expect(token).not.toBeNull();

            const getTests = await supertest(app).get("/tests?groupBy=disciplines").set("Authorization", `Bearer ${token}`);
            expect(getTests.body).toBeInstanceOf(Array)
            expect(getTests.statusCode).toBe(200);

        });

    });

});



afterAll(async () => {
    await prisma.$disconnect();
});