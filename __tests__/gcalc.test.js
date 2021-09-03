import { Ager } from "../src/js/gcalc.js";
import { mercuryAger } from "../src/js/mercury.js";
import { venusAger } from "../src/js/venus.js";

describe("ager", () => {
  let friend1;
  beforeEach(() => {
    friend1 = new Ager(60);
  });

  test("should create an ager object", () => {
    expect(friend1).toBeDefined();
  });

  test("should correctly return ager's age in earth years", () => {
    expect(friend1.age).toEqual(60);
    });
});


describe("mercuryAger", () => {
  test("should correctly return ager's age in mercury years", () => {
    let friend1 = new mercuryAger(60);
    expect(friend1.age).toEqual(14);
  });
});


describe("venusAger", () => {
  test("should correctly return ager's age in venus years", () => {
    let friend1 = new venusAger(60);
    expect(friend1.age).toEqual(37);
  });
});