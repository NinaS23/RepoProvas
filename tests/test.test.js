import supertest from "supertest";
import prisma from "../src/config/database";
import app from "../src/app/app";
import * as factory from "./factory/testFactory";
import * as userFactory from "./factory/userFactory";



beforeEach(async () => {
    await prisma.$executeRaw`TRUNCATE TABLE users CASCADE`;
});


describe("test post test route", () => {

    it("should create a test when correct info returning 201", async () => {
      const createUserData = userFactory.createUser();
      const createUser = await supertest(app).post("/sign-up").send(createUserData);
      expect(createUser.statusCode).toBe(201);

      const login = userFactory.loginUser();
      const getToken = await supertest(app).post("/sign-in").send(login);
      expect(getToken.body.token).not.toBeNull();

      const inputContent = factory.generateDataInput();
      const createTest = await supertest(app).post("/tests").send(inputContent).set("Authorization", `Bearer ${getToken.body.token}`);
      expect(createTest.statusCode).toBe(201);
    });
  
    it("send incorrect input should return 422", async () => {
      const createUserData = userFactory.createUser();
      const createUser = await supertest(app).post("/sign-up").send(createUserData);
      expect(createUser.statusCode).toBe(201);

      const login = userFactory.loginUser();
      const getToken = await supertest(app).post("/sign-in").send(login);
      expect(getToken.body.token).not.toBeNull();

      const inputContent = factory.generateDataInput(true);
      const createTest = await supertest(app).post("/tests").send(inputContent).set("Authorization", `Bearer ${getToken.body.token}`);
      expect(createTest.statusCode).toBe(422);
    });
  
    it("not sent or wrong token returns a 401 status", async () => {
      const inputContent = factory.generateDataInput();
      const createTest = await supertest(app).post("/test").send(inputContent);
      expect(createTest.statusCode).toBe(401);
      const wrongCreationForTest = await supertest(app).post("/test").send(inputContent).set("Authorization", `Bearer random`);
      expect(wrongCreationForTest.statusCode).toBe(401);
    });
 
  });

  describe("test get tests group by discplines or teachers", () => {
  
    it("send requeste with correct query and correct Headers group by disciplines", async () => {
      const createUserData = userFactory.createUser();
      const createUser = await supertest(app).post("/sign-up").send(createUserData);
      expect(createUser.statusCode).toBe(201);

      const login = userFactory.loginUser();
      const getToken = await supertest(app).post("/sign-in").send(login);
      expect(getToken.body.token).not.toBeNull();
      
      const getTestsByDiscipline = await supertest(app).get("/tests?groupBy=disciplines").set("Authorization", `Bearer ${getToken.body.token}`);
      expect(getTestsByDiscipline.body.tests).not.toBeUndefined();
      expect(getTestsByDiscipline.statusCode).toBe(200);
    });
  
    it("send requeste  with correct query and correct Headers  group by teachers", async () => {
      const createUserData = userFactory.createUser();
      const createUser = await supertest(app).post("/sign-up").send(createUserData);
      expect(createUser.statusCode).toBe(201);

      const login = userFactory.loginUser();
      const getToken = await supertest(app).post("/sign-in").send(login);
      expect(getToken.body.token).not.toBeNull();

      const getTests = await supertest(app).get("/tests?groupBy=teachers").set("Authorization", `Bearer ${getToken.body.token}`);
      expect(getTests.body.tests).not.toBeUndefined();
      expect(getTests.statusCode).toBe(200);
    });
  
    it("send request with incorrect Headers query should return 404", async () => {
      const createUserData = userFactory.createUser();
      const createUser = await supertest(app).post("/sign-up").send(createUserData);
      expect(createUser.statusCode).toBe(201);

      const login = userFactory.loginUser();
      const getToken = await supertest(app).post("/sign-in").send(login);
      expect(getToken.body.token).not.toBeNull();

      const getTests = await supertest(app).get("/tests?groupBy=randomText").set("Authorization", `Bearer ${getToken.body.token}`);
      expect(getTests.statusCode).toBe(404);
    });
  
    it("send request  with incorrect Headers query should return 404", async () => {
      const createUserData = userFactory.createUser();
      const createUser = await supertest(app).post("/sign-up").send(createUserData);
      expect(createUser.statusCode).toBe(201);

      const login = userFactory.loginUser();
      const getToken = await supertest(app).post("/sign-in").send(login);
      expect(getToken.body.token).not.toBeNull();

      const getTests = await supertest(app).get("/tests?groupBy=randomText").set("Authorization", `Bearer randomText`);
      expect(getTests.statusCode).toBe(401);
    });
    
  });
