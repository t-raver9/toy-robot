import { Command } from './command.js'

const LeftCommand = () => {
    const prototype = Command();
    const getCommandString = () => {
        return 'LEFT';
    };
    return Object.assign({}, prototype, {getCommandString});
};

export { LeftCommand };