import { Ager } from "./../src/gcalc.js";

describe("ager", () => {
  test("should create an ager object", () => {
  let friend1 = new Ager();
  expect(friend1).toBeDefined();
  console.log(friend1);
  });
});