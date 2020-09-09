import { Command } from './command.js'

const MoveCommand = () => {
    const prototype = Command();
    const getCommandString = () => {
        return 'MOVE';
    };
    return Object.assign({}, prototype, {getCommandString});
};

export { MoveCommand };