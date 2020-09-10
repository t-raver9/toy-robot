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
            case 'NORTH' :
                if (y < boardConfig.boardHeight) {
                    y++;
                };
                break;
            case 'SOUTH' :
                if (y > 0) {
                    y--;
                }
                break;
            case 'EAST' :
                if (x < boardConfig.boardWidth) {
                    x++;
                }
                break;
            case 'WEST' :
                if (x > 0) {
                    x--;
                }
                break;
        }
    }

    const rotate = (command) => {
        let rotationDirection = command.getCommandString();
        switch (rotationDirection) {
            case 'RIGHT':
                setDirection(rotateRightDict[direction]);
                break;
            case 'LEFT':
                setDirection(rotateLeftDict[direction]);
                break;
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