import { ItestInput } from "../../src/types/testTypes";
import { faker } from "@faker-js/faker";


export function createFakerTestData(random: boolean) {
  if (random === true) {
    return {
      name: faker.random.words(2),
      category: faker.random.word(),
      pdfUrl: faker.internet.url(),
      discipline: faker.random.word(),
      teacher: faker.random.word()
    }
  } else {
    return {
      name: faker.random.words(2),
      category: "Projeto",
      pdfUrl: faker.internet.url(),
      discipline: "JavaScript",
      teacher: "Diego Pinho"
    }
  }
};

