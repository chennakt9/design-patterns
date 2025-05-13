interface PaymentStrategy {
  pay(amount: number): void;
}

class Paypal implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} with Paypal`);
  }
}

class Stripe implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} with Stripe`);
  }
}

// driver
class Checkout {
  constructor(private strategy: PaymentStrategy) {}

  processPayment(amount: number) {
    this.strategy.pay(amount);
  }
}

const getPaymentStrategyFactory = (type: string) => {
  if (type === 'paypal') {
    return new Paypal();
  }

  return new Stripe();
}

const strategy = getPaymentStrategyFactory('paypal');

const checkout = new Checkout(strategy);
