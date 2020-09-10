import fs from "fs";

const inputParser = (() => {
  const INVALID_INPUT_FORMAT_ERROR =
    "Invalid input format - please refer to docs";
  const FILEPATH_NOT_FOUND_ERROR =
    "Filepath not found! Please check your input path";
  const DEFAULT_FILEPATH = "src/input.txt";
  var filepath;

  const readInput = (args) => {
    const input = args;
    if (checkValidInputFormat(input)) {
      filepath = extractFilePath(input);
    } else {
      throw `${INVALID_INPUT_FORMAT_ERROR}`;
    }
    return filepath;
  };

  const readDefaultInput = () => {
    return DEFAULT_FILEPATH;
  };

  const checkValidInputFormat = (input) => {
    return input.length == 3;
  };

  const extractFilePath = (input) => {
    return input[2];
  };

  const checkFileExists = (filepath) => {
    return fs.existsSync(filepath);
  };

  const getInputFileContents = (filepath) => {
    if (checkFileExists(filepath)) {
      const fileContents = fs.readFileSync(filepath, "utf8");
      return fileContents;
    } else {
      throw FILEPATH_NOT_FOUND_ERROR;
    }
  };

  return { readInput, readDefaultInput, getInputFileContents };
})();

export { inputParser };
