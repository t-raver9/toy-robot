import { Command } from './command.js'

const RightCommand = () => {
    const prototype = Command();
    const getCommandString = () => {
        return 'RIGHT';
    };
    return Object.assign({}, prototype, {getCommandString});
};

export { RightCommand };