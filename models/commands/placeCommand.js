import { Command } from './command.js'

const PlaceCommand = (input) => {
    const prototype = Command();

    let x
    let y
    let direction

    const getCommandString = (input) => {
        return 'INSERT';
    };
    return Object.assign({}, prototype, {getCommandString});
};

export { PlaceCommand };