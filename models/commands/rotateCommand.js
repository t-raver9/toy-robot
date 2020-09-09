import { Command } from './command.js'

const RotateCommand = () => {
    const prototype = Command();
    return Object.assign({}, prototype, {});
};

export { RotateCommand };