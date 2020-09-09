import { boardConfig } from '../../config/boardConfig.js'

const placeCommandValidator = (() => {
    const checkValidPlacement = () => {
        return true;
    };
    return { checkValidPlacement };
})();

export { placeCommandValidator };