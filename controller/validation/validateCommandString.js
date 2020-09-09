const commandStringValidator = (() => {
    const PLACE_VALIDATION = 'PLACE (\\d),(\\d),(NORTH||EAST||SOUTH||WEST)';
    const MOVE_VALIDATION = 'MOVE';
    const REPORT_VALIDATION = 'REPORT';
    const ROTATE_VALIDATION = '(LEFT||RIGHT)'

    const checkCommand = (command) => {
        return (
            command.match(MOVE_VALIDATION) ||
            command.match(REPORT_VALIDATION) ||
            command.match(ROTATE_VALIDATION) ||
            command.match(PLACE_VALIDATION)
        ) ?
            true :
            false;
    };

    return { checkCommand };
})();

export { commandStringValidator };