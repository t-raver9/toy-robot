import { Command } from "./command.js";

function RotateCommand() {}
RotateCommand.prototype = Object.create(Command.prototype);

export { RotateCommand };
