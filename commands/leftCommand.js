import { Command } from "./command.js";

function LeftCommand() {}
LeftCommand.prototype = Object.create(Command.prototype);
LeftCommand.prototype.getCommandString = () => {
  return "LEFT";
};

const LeftCommandFactory = () => {
  return new LeftCommand();
};

export { LeftCommandFactory, LeftCommand };
