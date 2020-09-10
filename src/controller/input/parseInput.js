import fs from "fs";

const inputParser = (() => {
  const INVALID_INPUT_FORMAT_ERROR =
    "Invalid input format - please refer to docs";
  const FILEPATH_NOT_FOUND_ERROR =
    "Filepath not found! Please check your input path";
  const DEFAULT_FILEPATH = "input.txt";
  var filepath;

  /* readInput is used when the robot is invoked with a
     command-line argument of the path of the file. This
     feature is't currently in use - the input will come
     from DEFAULT_FILEPATH by default */
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

  // Used if filepath passed as command-line argument
  const checkValidInputFormat = (input) => {
    return input.length == 3;
  };

  // Used if filepath passed as command-line argument
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
