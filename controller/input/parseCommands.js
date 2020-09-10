import { commandStringValidator } from "../validation/validateCommandString.js";
import { placeCommandValidator } from "../validation/validatePlacement.js";
import { LeftCommandFactory } from "../../commands/leftCommand.js";
import { RightCommandFactory } from "../../commands/rightCommand.js";
import { MoveCommandFactory } from "../../commands/moveCommand.js";
import { PlaceCommandFactory } from "../../commands/placeCommand.js";
import { ReportCommandFactory } from "../../commands/reportCommand.js";
import { dir } from "console";

const commandParser = (() => {
  const COMMAND_PLACE = "PLACE";
  const COMMAND_MOVE = "MOVE";
  const COMMAND_REPORT = "REPORT";
  const COMMAND_RIGHT = "RIGHT";
  const COMMAND_LEFT = "LEFT";

  let validCommands;
  let commandObjectsList = new Array();

  const filterValidCommands = (input) => {
    const commands = input.toString().split("\n");
    validCommands = commands.filter((command) =>
      commandStringValidator.checkCommand(command)
    );
  };

  const processCommands = () => {
    let placeCommandSeen = false;
    for (let i = 0; i < validCommands.length; i++) {
      if (validCommands[i].startsWith(COMMAND_PLACE)) {
        let { x, y, direction } = placeCommandValidator.placeCommandSplitter(
          validCommands[i]
        );
        if (placeCommandValidator.checkValidPlacement(x, y)) {
          placeCommandSeen = true;
          commandObjectsList.push(PlaceCommandFactory(x, y, direction));
        } else {
          throw "INVALID PLACEMENT";
        }
      } else if (!placeCommandSeen) {
        continue;
      } else if (validCommands[i] === COMMAND_MOVE) {
        commandObjectsList.push(MoveCommandFactory());
      } else if (validCommands[i] === COMMAND_REPORT) {
        commandObjectsList.push(ReportCommandFactory());
      } else if (validCommands[i] === COMMAND_RIGHT) {
        commandObjectsList.push(RightCommandFactory());
      } else if (placeCommandSeen) {
        commandObjectsList.push(LeftCommandFactory());
      }
    }
    return commandObjectsList;
  };

  return { filterValidCommands, processCommands };
})();

export { commandParser };
