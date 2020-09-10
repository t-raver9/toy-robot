import { inputParser } from "../controller/input/parseInput.js";
import { commandParser } from "../controller/input/parseCommands.js";

import { navigator } from "../controller/navigation.js";

import { MoveCommand } from "../commands/moveCommand.js";
import { PlaceCommand } from "../commands/placeCommand.js";
import { ReportCommand } from "../commands/reportCommand.js";
import { RightCommand } from "../commands/rightCommand.js";
import { LeftCommand } from "../commands/leftCommand.js";

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
  if (commandObjectsList.length > 0) {
    const initCommand = commandObjectsList.shift();
    navigator.place(initCommand);
  }

  // Process remaining objects
  commandObjectsList.forEach((command) => {
    if (command instanceof MoveCommand) {
      navigator.move(command);
    } else if (command instanceof PlaceCommand) {
      navigator.place(command);
    } else if (command instanceof RightCommand) {
      navigator.rotate(command);
    } else if (command instanceof LeftCommand) {
      navigator.rotate(command);
    } else if (command instanceof ReportCommand) {
      console.log(navigator.report());
    } else {
      console.log(command.getCommandString());
    }
  });
};

main(process.argv);
