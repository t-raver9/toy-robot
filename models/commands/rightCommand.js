import { RotateCommand } from './rotateCommand.js'

const RightCommand = () => {
    const prototype = RotateCommand();
    const getCommandString = () => {
        return 'RIGHT';
    };
    return Object.assign({}, prototype, {getCommandString});
};

export { RightCommand };