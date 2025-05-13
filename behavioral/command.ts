// command-pattern.ts
export {}
// Step 1: Command Interface
interface Command {
  execute(): void;
  undo(): void;
}

// Step 2: Receiver
class Light {
  turnOn() {
    console.log("💡 Light is ON");
  }

  turnOff() {
    console.log("🕶️ Light is OFF");
  }
}

// Step 3: Concrete Commands
class TurnOnCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOn();
  }

  undo() {
    this.light.turnOff();
  }
}

class TurnOffCommand implements Command {
  constructor(private light: Light) {}

  execute() {
    this.light.turnOff();
  }

  undo() {
    this.light.turnOn();
  }
}

// Step 4: Invoker
class RemoteControl {
  private history: Command[] = [];

  executeCommand(command: Command) {
    command.execute();
    this.history.push(command);
  }

  undoLastCommand() {
    const command = this.history.pop();
    if (command) {
      console.log("↩️ Undoing last command...");
      command.undo();
    } else {
      console.log("🚫 No commands to undo.");
    }
  }
}

// Step 5: Client
const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.executeCommand(turnOn);  // 💡 Light is ON
remote.executeCommand(turnOff); // 🕶️ Light is OFF
remote.undoLastCommand();       // 💡 Light is ON
remote.undoLastCommand();       // 🕶️ Light is OFF
remote.undoLastCommand();       // 🚫 No commands to undo.
