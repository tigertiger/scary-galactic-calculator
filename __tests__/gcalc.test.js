import { Ager } from "../src/js/gcalc.js";
import { mercuryAger } from "../src/js/mercury.js";
import { venusAger } from "../src/js/venus.js";
import { marsAger } from "../src/js/mars.js";
import { jupiterAgerEr } from "../src/js/jupiter.js";

describe("ager", () => {
  let friend1;
  // let friend2;
  // let friend3;
  // let friend4;
  // let friend5;
  // let friend6;
  // let friend7;
  // let friend8;
  beforeEach(() => {
    friend1 = new Ager(60, "North America", "Female", "High", 91);
    // friend2 = new Ager(40, "Asia", "Male", "Med");
    // friend3 = new Ager(25, "Oceania", "Male", "Low");
    // friend4 = new Ager(53, "Africa", "Female", "I intend to live forever");
    // friend5 = new Ager(32, "Europe", "Female", "Med");
    // friend6 = new Ager(80, "Latin America", "Male", "I intend to live forever");
    // friend7 = new Ager(17, "North America", "Female", "High");
    // friend8 = new Ager(73, "Asia", "Male", "Med");
  });

  test("should create an ager object", () => {
    expect(friend1).toBeDefined();
  });

  test("should correctly return ager's age in Earth years", () => {
    expect(friend1.age).toEqual(60);
    });

  test("should correctly return ager's life expectancy based on user input", () => {
    expect(friend1.lifeExpect).toEqual(91)
  });

  // test("should correctly return ager's homeland, sex, & motivation to continue living, based on user input", () => {
  //   expect(friend1.homeland).toBe("North America");
  //   expect(friend1.assignedSex).toBe("Female");
  //   expect(friend1.motivation).toBe("High");
  // });

  // test("should correctly modify life expectancy based on assignedSex", () => {
  //   friend1.baseLifeExpect();
  //   friend2.baseLifeExpect();
  //   expect(friend1.lifeExpect).toEqual(65);
  //   expect(friend2.lifeExpect).toEqual(62);
  // });

  // test("should correctly modify life expectancy based on assignedSex, homeland, & motivation to continue living", () => {
  //   friend3.baseLifeExpect();
  //   friend4.baseLifeExpect();
  //   friend5.baseLifeExpect();
  //   friend6.baseLifeExpect();
  //   friend7.baseLifeExpect();
  //   friend8.baseLifeExpect();
  //   expect(friend3.lifeExpect).toEqual(67);
  //   expect(friend4.lifeExpect).toEqual(85);
  //   expect(friend5.lifeExpect).toEqual(82);
  //   expect(friend6.lifeExpect).toEqual(92);
  //   expect(friend7.lifeExpect).toEqual(91);
  //   expect(friend8.lifeExpect).toEqual(71);
  // });

  // test("should correctly return ager's estimated remaining lifespan, in Earth years, based on user-input variables", () => {
  //   expect(friend1.timeLeft()).toEqual(31);
  // });

});


describe("mercuryAger", () => {
  test("should correctly return ager's age in Mercury years", () => {
    let friend1 = new mercuryAger(60);
    expect(friend1.age).toEqual(14);
  });
});


describe("venusAger", () => {
  test("should correctly return ager's age in Venus years", () => {
    let friend1 = new venusAger(60);
    expect(friend1.age).toEqual(37);
  });
});

describe("marsAger", () => {
  test("should correctly return ager's age in Mars years", () => {
    let friend1 = new marsAger(60);
    expect(friend1.age).toEqual(112);
  });
});

describe("jupiterAgerEr", () => {
  test("should correctly return ager's age in Jupiter years", () => {
    let friend1 = new jupiterAgerEr(60);
    expect(friend1.age).toEqual(711);
  });
});