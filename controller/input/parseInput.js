import fs from 'fs'

const inputParser = (() => {
    var filepath

    const readInput = (args) => {
        const input = args;
        if (checkValidInputFormat(input)) {
            filepath = extractFilePath(input);
        }
        return filepath;
    }

    const checkValidInputFormat = (input) => {
        return input.length == 3;
    }

    const extractFilePath = (input) => {
        return input[2];
    }

    const checkFileExists = (filepath) => {
        return fs.existsSync(filepath);
    }

    const getInputFileContents = (filepath) => {
        if (checkFileExists(filepath)) {
            const fileContents = fs.readFileSync(filepath, 'utf8');
            return fileContents;
        } else {
            throw 'Filepath not found! Please check your input path';
        }
    }

    return { readInput, getInputFileContents };
})();

const filepath = inputParser.readInput(process.argv);
inputParser.getInputFileContents(filepath);