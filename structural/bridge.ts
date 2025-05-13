interface Device {
  turnOn(): void;
  turnOff(): void;
}

class TV implements Device {
  turnOn() {
    console.log('Turning on TV');
  }

  turnOff() {
    console.log('Turning off TV');
  }
}

class RemoteControl {
  constructor(private device: Device) {}

  turnOn() {
    this.device.turnOn();
  }

  turnOff() {
    this.device.turnOff();
  }
}
