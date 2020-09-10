const commandStringValidator = (() => {
  const PLACE_VALIDATION = RegExp(
    /^PLACE (\d+),(\d+),(NORTH|EAST|SOUTH|WEST)$/
  );
  const MOVE_VALIDATION = RegExp(/^MOVE$/);
  const REPORT_VALIDATION = RegExp(/^REPORT$/);
  const ROTATE_VALIDATION = RegExp(/^(LEFT|RIGHT)$/);

  const checkCommand = (command) => {
    return MOVE_VALIDATION.test(command) ||
      REPORT_VALIDATION.test(command) ||
      ROTATE_VALIDATION.test(command) ||
      PLACE_VALIDATION.test(command)
      ? true
      : false;
  };

  return { checkCommand };
})();

export { commandStringValidator };
