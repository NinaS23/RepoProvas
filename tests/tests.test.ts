import app from "../src/app/app";
import prisma from "../src/config/database";
import supertest from "supertest";
import * as factory from "./factory/userFactory";
import * as testFactory from "./factory/testFactory";



describe("test route POST /test", () => {

    it("send a test with the correct schema, should returns 201", async () => {
        const createUserData = factory.createUserForTests();
        const createdUser = await supertest(app).post("/sign-up").send(createUserData);
        expect(createdUser.statusCode).toBe(201);
     
        const user = factory.loginUserForTests();
        const result = await supertest(app).post("/sign-in").send(user);
        expect(result.statusCode).toBe(200);
        const token = result.body.token;
        expect(token).not.toBeNull();


        const testData = testFactory.createFakerTestData(false);
        const testResult = await supertest(app).post("/test").send(testData).set("Authorization", `Bearer ${token}`);
        expect(testResult.statusCode).toBe(201);

    });

    it("send a test with the incorrect schema, should returns 404", async () => {
       

        const user = factory.loginUserForTests();
        const result = await supertest(app).post("/sign-in").send(user);
        expect(result.statusCode).toBe(200);
        const token = result.body.token;
        expect(token).not.toBeNull();


        const testData = testFactory.createFakerTestData(true);
        const testResult = await supertest(app).post("/test").send(testData).set("Authorization", `Bearer ${token}`);
        expect(testResult.statusCode).toBe(404);

    });


    it("send a test without the Headers, should returns 401", async () => {
    
        const user = factory.loginUserForTests();
        const result = await supertest(app).post("/sign-in").send(user);
        expect(result.statusCode).toBe(200);
        const token = result.body.token;
        expect(token).not.toBeNull();


        const testData = testFactory.createFakerTestData(false);
        const testResult = await supertest(app).post("/test").send(testData);
        expect(testResult.statusCode).toBe(401);

    });



    describe("test route GET /tests", () => {

        it("get with the correct request and set headers , should return 200", async () => {
            const user = factory.loginUserForTests();
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(200);
            const token = result.body.token;
            expect(token).not.toBeNull();

            const getTests = await supertest(app).get("/tests?groupBy=disciplines").set("Authorization", `Bearer ${token}`);
            expect(getTests.body).toBeInstanceOf(Array)
            expect(getTests.statusCode).toBe(200);

        });

        it("get with the correct request and set headers , should return 200", async () => {
            const user = factory.loginUserForTests();
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(200);
            const token = result.body.token;
            expect(token).not.toBeNull();

            const getTests = await supertest(app).get("/tests?groupBy=teachers").set("Authorization", `Bearer ${token}`);
            expect(getTests.body).toBeInstanceOf(Array)
            expect(getTests.statusCode).toBe(200);

        });


        it("get with the incorrect request and set headers , should return 404", async () => {
           
            const user = factory.loginUserForTests();
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(200);
            const token = result.body.token;
            expect(token).not.toBeNull();

            const getTests = await supertest(app).get("/tests?groupBy=RANDOM_TEXT").set("Authorization", `Bearer ${token}`);
            expect(getTests.statusCode).toBe(404);

        });

        it("get with the correct request and not set headers , should return 401", async () => {
            const user = factory.loginUserForTests();
            const result = await supertest(app).post("/sign-in").send(user);
            expect(result.statusCode).toBe(200);
            const token = result.body.token;
            expect(token).not.toBeNull();

            const getTests = await supertest(app).get("/tests?groupBy=disciplines");
            expect(getTests.statusCode).toBe(401);

        });

    });

});



afterAll(async () => {
    await prisma.$disconnect();
});