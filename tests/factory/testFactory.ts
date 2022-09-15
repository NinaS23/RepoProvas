import { ItestInput } from "../../src/types/testTypes";
import { faker } from "@faker-js/faker";


export function createFakerTestData(random: boolean = false) {
    return random
      ? <ItestInput>{
          name: faker.random.words(2),
          category: faker.random.word(),
          pdfUrl: faker.internet.url(),
          discipline: faker.random.word(),
        }
      : <ItestInput>{
          name: faker.random.words(2),
          category: "Projeto",
          pdfUrl: faker.internet.url(),
          discipline: "Humildade",
        };
  }