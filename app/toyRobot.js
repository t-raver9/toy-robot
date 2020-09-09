import { inputParser } from '../controller/input/parseInput.js'
import { commandParser } from '../controller/input/parseCommands.js'
import { navigator } from '../controller/navigation.js'

import { RotateCommand } from '../models/commands/rotateCommand.js'
import { MoveCommand } from '../models/commands/moveCommand.js'
import { PlaceCommand } from '../models/commands/placeCommand.js'
import { ReportCommand } from '../models/commands/reportCommand.js'

const main = (args) => {
    // Gather commands from input file
    const filepath = inputParser.readDefaultInput();
    const commandsFromFile = inputParser.getInputFileContents(filepath);

    // Check each command for validity, then call processCommands() to
    // get an array of command objects. The first object in the list
    // (unless empty) will be an place - any commands before this
    // are ignored
    commandParser.filterValidCommands(commandsFromFile);
    let commandObjectsList = commandParser.processCommands();

    // Instantiate the navigator with the first place command, should
    // it exist
    if (commandObjectsList) {
        const initCommand = commandObjectsList.shift();
        navigator.place(initCommand);
    }

    // Process remaining objects
    for (let i=0; i<commandObjectsList.length; i++) {
        let command = commandObjectsList[i];
        if (command instanceof RotateCommand) {
            navigator.rotate(command);
        } else if (command instanceof MoveCommand) {
            navigator.move(command);
        } else if (command instanceof PlaceCommand) {
            navigator.place(command);
        } else if (command instanceof ReportCommand) {
            console.log(navigator.report());
        }
    }

}

main(process.argv);