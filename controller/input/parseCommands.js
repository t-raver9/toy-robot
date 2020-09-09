import { commandStringValidator } from '../validation/validateCommandString.js'
import { placeCommandValidator } from '../validation/validatePlacement.js'
import { LeftCommand } from '../../models/commands/leftCommand.js'
import { RightCommand } from '../../models/commands/rightCommand.js'
import { MoveCommand } from '../../models/commands/moveCommand.js'
import { PlaceCommand } from '../../models/commands/placeCommand.js'
import { ReportCommand } from '../../models/commands/reportCommand.js'

const commandParser = (() => {
    const COMMAND_PLACE = 'PLACE';
    const COMMAND_MOVE = 'MOVE';
    const COMMAND_REPORT = 'REPORT';
    const COMMAND_RIGHT = 'RIGHT';
    const COMMAND_LEFT = 'LEFT';

    let validCommands;
    let commandObjectsList = new Array();

    const filterValidCommands = (input) => {
        const commands = input.toString().split('\n');
        validCommands = commands.filter(command => 
            commandStringValidator.checkCommand(command));
    }

    const processCommands = () => {
        let placeCommandSeen = false;
        for (let i=0; i<validCommands.length; i++) {
            if (validCommands[i].startsWith(COMMAND_PLACE)) {
                if (placeCommandValidator.checkValidPlacement(validCommands[i])) {
                    placeCommandSeen = true;
                    commandObjectsList.push(PlaceCommand(validCommands[i]));
                }
            } else if (!placeCommandSeen) {
                continue;
            } else if (validCommands[i].startsWith(COMMAND_MOVE)) {
                commandObjectsList.push(MoveCommand(validCommands[i]));
            } else if (validCommands[i].startsWith(COMMAND_REPORT)) {
                commandObjectsList.push(ReportCommand(validCommands[i]));
            } else if (validCommands[i].startsWith(COMMAND_RIGHT)) {
                commandObjectsList.push(RightCommand(validCommands[i]));
            } else if (placeCommandSeen) {
                commandObjectsList.push(LeftCommand(validCommands[i]));
            }
        }
        commandObjectsList.forEach((command) => {
            console.log(command.getCommandString());
        })
    }

    return { filterValidCommands, processCommands };

})();

export { commandParser };