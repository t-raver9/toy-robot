import { RotateCommand } from './rotateCommand.js'

const LeftCommand = () => {
    const prototype = RotateCommand();
    const getCommandString = () => {
        return 'LEFT';
    };
    return Object.assign({}, prototype, {getCommandString});
};

export { LeftCommand };