class Singleton {
  private static instance: Singleton;

  private constructor() {
    console.log("Singleton instance created 🎉");
  }

  public static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  public helloWorld() {
    console.log('Some message');
  }
}

const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2);

obj1.helloWorld();
