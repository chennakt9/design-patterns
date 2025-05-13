interface Observer {
  update(data: string): void;
}

class ConcreteObserver implements Observer {
  constructor(private name: string) {}
  update(data: string): void {
    console.log(`${this.name} notified with data: ${data}`);
  }
}

class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  notify(data: string) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}

const subject = new Subject();
const observer1 = new ConcreteObserver('observer1');
const observer2 = new ConcreteObserver('observer2');

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify('Some data');
