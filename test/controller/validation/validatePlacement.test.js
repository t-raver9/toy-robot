import { placeCommandValidator } from "../../../src/controller/validation/validatePlacement";
import { boardConfig } from "../../../src/config/boardConfig";

test("Zeros return true", () => {
  expect(placeCommandValidator.checkValidPlacement(0, 0)).toBe(true);
});

test("Valid x and y returns true", () => {
  expect(placeCommandValidator.checkValidPlacement(1, 1)).toBe(true);
});

test("Negative x returns false", () => {
  expect(placeCommandValidator.checkValidPlacement(-3, 1)).toBe(false);
});

test("Negative y returns false", () => {
  expect(placeCommandValidator.checkValidPlacement(1, -4)).toBe(false);
});

test("Both negative returns false", () => {
  expect(placeCommandValidator.checkValidPlacement(-2, -4)).toBe(false);
});

test("x too large returns false", () => {
  expect(
    placeCommandValidator.checkValidPlacement(boardConfig.boardHeight + 1, 1)
  ).toBe(false);
});

test("y too large returns false", () => {
  expect(
    placeCommandValidator.checkValidPlacement(1, boardConfig.boardWidth + 1)
  ).toBe(false);
});

test("Valid place command splits correctly", () => {
  expect(
    placeCommandValidator.placeCommandSplitter("PLACE 1,1,NORTH")
  ).toStrictEqual({ direction: "NORTH", x: "1", y: "1" });
});
