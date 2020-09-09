import { Command } from './command.js'

const PlaceCommand = (x_in, y_in, direction_in) => {
    let x = x_in;
    let y = y_in;
    let direction = direction_in;

    const prototype = Command();

    const getX = () => {
        return x;
    }

    const getY = () => {
        return y;
    }

    const getDirection = () => {
        return direction;
    }

    const getCommandString = () => {
        return `PLACE ${x},${y},${direction}`;
    };

    return Object.assign({}, prototype, {getCommandString, getX, getY, getDirection});
};

export { PlaceCommand };