class CPU {
  freeze() { console.log("Freezing CPU..."); }
  execute() { console.log("Executing..."); }
}

class Memory {
  load() { console.log("Loading memory..."); }
}

class ComputerFacade {
  private cpu = new CPU();
  private memory = new Memory();

  start() {
    this.cpu.freeze();
    this.memory.load();
    this.cpu.execute();
  }
}

// Usage
const computer = new ComputerFacade();
computer.start(); // Simple interface
