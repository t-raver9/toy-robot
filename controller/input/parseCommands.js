import { commandStringValidator } from '../validation/validateCommandString.js';

const commandParser = (() => {
    const COMMAND_PLACE = 'PLACE';
    const COMMAND_MOVE = 'MOVE';
    const COMMAND_REPORT = 'REPORT';

    let commandsInFile

    const getFileContents = (input) => {
        commandsInFile = input.toString().split('\n');
    }

    const processCommands = () => {
        for (let i=0; i<commandsInFile.length; i++) {
            console.log(commandStringValidator.matchCommand(commandsInFile[i]));
        }
    }

    return { getFileContents, processCommands };

})();

export { commandParser };