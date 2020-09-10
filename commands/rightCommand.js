import { Command } from "./command.js";

function RightCommand() {}
RightCommand.prototype = Object.create(Command.prototype);
RightCommand.prototype.getCommandString = () => {
  return "RIGHT";
};

const RightCommandFactory = () => {
  return new RightCommand();
};

export { RightCommandFactory, RightCommand };
