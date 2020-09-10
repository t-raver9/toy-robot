import { commandStringValidator } from "../../../src/controller/validation/validateCommandString";

test("direction has an extra character", () => {
  expect(commandStringValidator.checkCommand("PLACE 1,1,NORTHH")).toBe(false);
});

test("empty string", () => {
  expect(commandStringValidator.checkCommand("")).toBe(false);
});

test("lowercase letter(s) in command", () => {
  expect(commandStringValidator.checkCommand("move")).toBe(false);
});

test("numbers with multiple digits", () => {
  expect(commandStringValidator.checkCommand("PLACE 11,1094,WEST")).toBe(true);
});
