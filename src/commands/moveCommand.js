import { Command } from "./command.js";

function MoveCommand() {}
MoveCommand.prototype = Object.create(Command.prototype);
MoveCommand.prototype.getCommandString = () => {
  return "MOVE";
};

const MoveCommandFactory = () => {
  return new MoveCommand();
};

export { MoveCommandFactory, MoveCommand };
