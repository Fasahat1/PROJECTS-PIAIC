import chalk from "chalk";

class Animal {
    // Properties
    name: string;
    age: number;
  
    // Constructor
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method
    makeSound() {
      console.log(chalk.bold.blueBright.italic("Animal Makes a Sound..."));
    }
  }
  
  class Dog extends Animal {
    // Constructor
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    // Method
    makeSound() {
      console.log(chalk.bold.redBright.italic("Dog barks!"));
    }
  }
  
  class Cat extends Animal {
    // Constructor
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    // Method
    makeSound() {
      console.log(chalk.bold.yellowBright.italic("Cat meows!"));
    }
  }

  class Lion extends Animal {
    // Constructor
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    // Method
    makeSound() {
      console.log(chalk.bold.greenBright.italic("Lion roar!"));
    }
  }
  
  // Create instances of Animal, Dog, Cat and Lion
  const genericAnimal = new Animal("Generic Animal", 3);
  const myDog = new Dog("Buddy", 5);
  const myCat = new Cat("Gucci", 2);
  const myLion = new Lion("Leo", 10);

  console.log(genericAnimal);
  console.log(myDog);
  console.log(myCat);
  console.log(myLion);
  
  // Call the makeSound method on different objects
  genericAnimal.makeSound(); // Outputs: Animal makes a sound.
  myDog.makeSound();         // Outputs: Dog barks!
  myCat.makeSound();         // Outputs: Cat meows!
  myLion.makeSound();         // Outputs: Lion roar!