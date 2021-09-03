import { Ager } from "../src/js/gcalc.js";

describe("ager", () => {
  let friend1;
  beforeEach(() => {
    friend1 = new Ager();
  });

  test("should create an ager object", () => {
  expect(friend1).toBeDefined();
  });

  test("should correctly return ager's age in earth years", () => {
    expect(friend1.age).toEqual(60);
    });
});