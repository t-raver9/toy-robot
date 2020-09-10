import { boardConfig } from '../../config/boardConfig.js'

const placeCommandValidator = (() => {
    const checkValidPlacement = (x, y) => {
        return ((x >= 0 && x <= boardConfig.boardWidth)
            && (y >= 0 && y <= boardConfig.boardHeight));
    };

    const placeCommandSplitter = (commandString) => {
        const options = commandString.split(' ')[1];
        const x = options.split(',')[0];
        const y = options.split(',')[1];
        const direction = options.split(',')[2];
        return {x: x, y: y, direction: direction }
    }
    return { checkValidPlacement, placeCommandSplitter };
})();

export { placeCommandValidator };