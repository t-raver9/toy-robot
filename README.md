# toy-robot
## About
A program to simulate a toy robot navigating on a 5x5 table. A detailed overview of the challenge can be found in PROBLEM.MD.

## Requirements
You'll need to have node installed on your system to run the simulation. You can find the install [here](https://nodejs.org/en/download/)

## Functionality
This toy robot will follow the commands given to it in input.txt. Commands you can give are:
* **PLACE X,Y,DIRECTION**: this will place the robot at the specified coordinates and facing the specified direction. If other commands are input before the robot is placed on the board, they will have no effect. The robot may be placed multiple times.
  * Both X and Y must be between 0 and 5, inclusive
  * DIRECTION must be one of NORTH, EAST, SOUTH or WEST
  * If the place command puts the robot off the board, an exception will occur
* **MOVE**: this will move the robot 1 unit in the direction it's facing. If the move will push the robot off the board, it will not be executed.
* **RIGHT**: this changes the robot's direction by rotating it 90 degrees clockwise
* **LEFT**: this changes the robot's direction by rotating it 90 degrees anti-clockwise
* **REPORT**: this will log the current location and direction of the robot, in the format **X,Y,DIRECTION**
* Aside from a place command that puts the robot off the board, any commands of an invalid format will be ignored

## Instructions
Once you've cloned this repo and installed node, update the input.txt to take your toy robot on the journey you desire. Once your route is prepared, run

node src/app/toyRobot.js

from your command line.

Happy roboting!
