import { Command } from "./command.js";

function PlaceCommand(x, y, direction) {
  this.x = x;
  this.y = y;
  this.direction = direction;
}

PlaceCommand.prototype = Object.create(Command.prototype);
PlaceCommand.prototype.getX = function () {
  return this.x;
};

PlaceCommand.prototype.getY = function () {
  return this.y;
};

PlaceCommand.prototype.getDirection = function () {
  return this.direction;
};

PlaceCommand.prototype.getCommandString = function () {
  return `PLACE ${this.x},${this.y},${this.direction}`;
};

const PlaceCommandFactory = (x, y, direction) => {
  return new PlaceCommand(x, y, direction);
};

export { PlaceCommandFactory, PlaceCommand };
