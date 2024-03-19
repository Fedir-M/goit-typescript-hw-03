//* class Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random(); //? а тут можна використати скорочену ініціалізацію як с таск№1
  }

  getSignature(): number {
    return this.signature;
  }
}

//* class Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}
//* abstraction House
abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person.getKey()} came in.`);
    } else {
      console.log("It is closed.");
    }
  }

  abstract openDoor(key: Key): void;
}

//* class MyHouse

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    // Якщо ключ, переданий цьому методу, збігається з ключем, збереженим як key, то двері відчиняються.
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      console.log("Error: the wrong key.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
