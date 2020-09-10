import { commandParser } from "../../../src/controller/input/parseCommands";
import fs from "fs";

test("Blank line filtered", () => {
  const fileContents = fs.readFileSync(
    "test/controller/input/blankLineFiltered.txt",
    "utf8"
  );
  expect(commandParser.filterValidCommands(fileContents)).toStrictEqual([
    "PLACE 1,1,NORTH",
    "MOVE",
    "REPORT",
  ]);
});

test("Filter invalid typos", () => {
  const fileContents = fs.readFileSync(
    "test/controller/input/typos.txt",
    "utf8"
  );
  expect(commandParser.filterValidCommands(fileContents)).toStrictEqual([]);
});

test("Empty instruction file", () => {
  const fileContents = fs.readFileSync(
    "test/controller/input/typos.txt",
    "utf8"
  );
  expect(commandParser.filterValidCommands(fileContents)).toStrictEqual([]);
});
