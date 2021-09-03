import { Ager } from "../src/js/gcalc.js";
import { mercuryAger } from "../src/js/mercury.js";
import { venusAger } from "../src/js/venus.js";
import { marsAger } from "../src/js/mars.js";
import { jupiterAgerEr } from "../src/js/jupiter.js";

describe("ager", () => {
  let friend1;
  beforeEach(() => {
    friend1 = new Ager(60, "North America", "Female", "High", 91);
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

  test("should correctly return ager's estimated remaining lifespan, in Earth years", () => {
    friend1.timeLeft();
    expect(friend1.yearsToLive).toEqual(31);
  });

  test("should return years lived beyond life expectancy, if ager has surpassed life expectancy", () => {
    let friend2 = new Ager(109, "Oceania", "Female", "High", "91");
    expect(friend2.timeLeft()).toEqual("You have already lived 18 years longer than expected. Good job.");
  });

  test("should return life expectancy in Mercury years", () => {
    friend1.timeLeft();
    expect(friend1.mercuryTimeLeft()).toEqual("About 7 Mercurian years");
  });

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