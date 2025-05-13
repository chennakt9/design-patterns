interface Command {
  execute(): void;
}

class Light {
  turnOn() {
    console.log('Turning on lights..')
  }

  turnOff() {
    console.log('Turning off lights..')
  }
}

