import { Ager } from "../src/js/gcalc.js";
import { mercuryAge } from "../src/js/mercury.js";

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

describe("mercuryAge", () => {
  test("should...", () => {
    let friend1 = new Ager(60);
    expect(friend1.age).toEqual(14);
  });
});