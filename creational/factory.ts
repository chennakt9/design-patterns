interface Notifier {
  send(recipient: string, message: string): void;
}

class EmailNotifier implements Notifier {
  send(recipient: string, message: string): void {
    console.log(`Sending Email to ${recipient} : ${message}`);
  }
}

class SMSNotifier implements Notifier {
  send(recipient: string, message: string): void {
    console.log(`Sending SMS to ${recipient} : ${message}`);
  }
}

class PushNotifier implements Notifier {
  send(recipient: string, message: string): void {
    console.log(`Sending Push notification to ${recipient} : ${message}`);
  }
}
