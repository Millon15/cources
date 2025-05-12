import { getObstacleEvents } from './computer-vision';

// Define an interface for the car
interface ICar {
  speed: number;
  steeringControl: ISteeringControl;
  accelerate(speed: number): void;
  brake(): void;
  turn(direction: 'left' | 'right'): void;
}

// Define an interface for the steering control
interface ISteeringControl {
  turn(direction: 'left' | 'right'): void;
}

// Implement the SteeringControl class
class SteeringControl implements ISteeringControl {
  execute(command: string) {
    console.log(`Executing: ${command}`);
  }

  turn(direction: 'left' | 'right') {
    this.execute(`turn ${direction}`);
  }
}

// Implement the Car class
class Car implements ICar {
  speed: number;
  steeringControl: ISteeringControl;

  constructor(speed: number) {
    this.speed = speed;
    this.steeringControl = new SteeringControl();
  }

  accelerate(speed: number) {
    this.speed += speed;
    console.log(`Accelerating. Current speed: ${this.speed}`);
  }

  brake() {
    this.speed = 0;
    console.log('Braking. Car stopped.');
  }

  turn(direction: 'left' | 'right') {
    this.steeringControl.turn(direction);
  }
}

// Autonomous driving function
function autonomousDrive(car: ICar) {
  const events = getObstacleEvents();
  console.log('Obstacle events:', events);

  if (events.ObstacleLeft) {
    console.log('Obstacle on the left detected. Turning right.');
    car.turn('right');
  } else if (events.ObstacleRight) {
    console.log('Obstacle on the right detected. Turning left.');
    car.turn('left');
  } else {
    console.log('No obstacles detected. Continuing straight.');
  }

  // Example: Accelerate if no obstacles
  if (!events.ObstacleLeft && !events.ObstacleRight) {
    car.accelerate(10);
  } else {
    car.brake(); // Brake if an obstacle is detected
  }
}

// Create a car instance
const myCar = new Car(0);

// Start autonomous driving
console.log('Starting autonomous driving...');
autonomousDrive(myCar);
console.log('---');
autonomousDrive(myCar);
console.log('---');
autonomousDrive(myCar);
