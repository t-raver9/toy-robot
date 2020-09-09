import { Command } from './command.js'

const ReportCommand = () => {
    const prototype = Command();
    const getCommandString = () => {
        return 'REPORT';
    };
    return Object.assign({}, prototype, {getCommandString});
};

export { ReportCommand };