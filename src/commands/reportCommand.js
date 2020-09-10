import { Command } from './command.js'

function ReportCommand() {};
ReportCommand.prototype = Object.create(Command.prototype);
ReportCommand.prototype.getCommandString = () => {
    return 'REPORT';
}

const ReportCommandFactory = () => {
    return new ReportCommand();
}

export { ReportCommandFactory, ReportCommand };