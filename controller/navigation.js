import { boardConfig } from '../config/boardConfig.js'

const navigator = (() => {
    let x;
    let y;
    let direction;

    const rotateLeftDict = {
        'NORTH': 'WEST',
        'EAST': 'NORTH',
        'SOUTH': 'EAST',
        'WEST': 'SOUTH'
    };

    const rotateRightDict = {
        'NORTH': 'EAST',
        'EAST': 'SOUTH',
        'SOUTH': 'WEST',
        'WEST': 'NORTH'
    };

    const setX = (newX) => {
        x = newX;
    }

    const setY = (newY) => {
        y = newY;
    }

    const setDirection = (newDirection) => {
        direction = newDirection;
    }

    const move = () => {
        switch (direction) {
            case ('NORTH' && (y < boardConfig.boardHeight)) :
                y += 1;
                break;
            case ('SOUTH' && (y > 0)) :
                y -= 1;
                break;
            case ('EAST' && (x < boardConfig.boardWidth)) :
                x += 1;
                break;
            case ('WEST' && (x > 0)) :
                x -= 1;
                break;
        }
    }

    const rotate = (command) => {
        rotationDirection = command.getCommandString();
        switch (rotationDirection) {
            case 'RIGHT':
                direction = rotateRightDict[direction];
            case 'LEFT':
                direction = rotateLeftDict[direction];
        }
    }

    const place = (command) => {
        x = command.getX();
        y = command.getY();
        direction = command.getDirection();
    }

    const report = () => {
        return `${x},${y},${direction}`
    };

    return { setX, setY, setDirection, move, rotate, place, report };

})();

export { navigator };