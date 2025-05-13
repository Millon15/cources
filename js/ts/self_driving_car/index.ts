import { getObstacleEvents } from './computer-vision';

// SECTION: TYPES
interface AutonomousCarProps {
  isRunning?: boolean;
  steeringControl: Steering;
}

interface AutonomousCar {
  isRunning?: boolean;
  respond(events: Events): void;
}

interface Events {
  [key: string]: boolean;
}

interface Control {
  execute(command: string): void;
}

interface Steering extends Control {
  turn(direction: string): void;
}

// SECTION: CLASSES
class SteeringControl implements Steering {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }

  turn(direction: string) {
    this.execute(`turn ${direction}`);
  }
}

class Car implements AutonomousCar {
  isRunning?: boolean;
  steeringControl: Steering;

  constructor(props: AutonomousCarProps) {
    this.isRunning = props.isRunning;
    this.steeringControl = props.steeringControl;
  }

  respond(events: Events): void {
    if (!this.isRunning) {
      console.log('Car is off.');
      return;
    }

    Object.keys(events).forEach(eventKey => {
      if (!events[eventKey]) {
        return;
      }

      if (eventKey === 'ObstacleLeft') {
        this.steeringControl.turn('right');
      } else if (eventKey === 'ObstacleRight') {
        this.steeringControl.turn('left');
      }
    });
  }
}

// SECTION: EXECUTION
const steering = new SteeringControl();
// steering.turn("right"); // Test from step 23

const autonomousCar = new Car({ isRunning: true, steeringControl: steering });
// console.log(autonomousCar.isRunning); // Test from step 11

autonomousCar.respond(getObstacleEvents());
autonomousCar.respond(getObstacleEvents());
autonomousCar.respond(getObstacleEvents());
autonomousCar.respond(getObstacleEvents());
