import { commandStringValidator } from "../validation/validateCommandString.js";
import { placeCommandValidator } from "../validation/validatePlacement.js";
import { LeftCommandFactory } from "../../commands/leftCommand.js";
import { RightCommandFactory } from "../../commands/rightCommand.js";
import { MoveCommandFactory } from "../../commands/moveCommand.js";
import { PlaceCommandFactory } from "../../commands/placeCommand.js";
import { ReportCommandFactory } from "../../commands/reportCommand.js";

const commandParser = (() => {
  const COMMAND_PLACE = "PLACE";
  const COMMAND_MOVE = "MOVE";
  const COMMAND_REPORT = "REPORT";
  const COMMAND_RIGHT = "RIGHT";
  const COMMAND_LEFT = "LEFT";

  const INVALID_PLACEMENT_ERRORSTRING = "INVALID PLACEMENT";
  const NEWLINE = "\n";

  let validCommands = new Array();
  let commandObjectsList = new Array();

  const filterValidCommands = (input) => {
    const commands = input.toString().split(`${NEWLINE}`);
    commands.forEach((command) => {
      if (!commandStringValidator.checkCommand(command)) {
        console.log(
          `WARNING: Invalid format for command ${command}. Command will be ignored${NEWLINE}`
        );
      }
    });
    validCommands = commands.filter((command) =>
      commandStringValidator.checkCommand(command)
    );
    return validCommands;
  };

  const processCommands = () => {
    let placeCommandSeen = false;
    for (let command of validCommands) {
      // If a place command, ensure it's valid
      if (command.startsWith(COMMAND_PLACE)) {
        let { x, y, direction } = placeCommandValidator.placeCommandSplitter(
          command
        );
        if (placeCommandValidator.checkValidPlacement(x, y)) {
          placeCommandSeen = true;
          commandObjectsList.push(PlaceCommandFactory(x, y, direction));
        } else {
          throw `${INVALID_PLACEMENT_ERRORSTRING}`;
        }
        // Otherwise, generate a command object
      } else {
        switch (command) {
          case COMMAND_MOVE:
            commandObjectsList.push(MoveCommandFactory());
            break;
          case COMMAND_REPORT:
            commandObjectsList.push(ReportCommandFactory());
            break;
          case COMMAND_RIGHT:
            commandObjectsList.push(RightCommandFactory());
            break;
          case COMMAND_LEFT:
            commandObjectsList.push(LeftCommandFactory());
        }
      }
    }
    return commandObjectsList;
  };

  return { filterValidCommands, processCommands };
})();

export { commandParser };
