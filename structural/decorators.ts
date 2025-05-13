class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator extends Coffee {
  constructor(private coffee: Coffee) {
    super();
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.cost());
