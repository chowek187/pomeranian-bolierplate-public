import './styles.css';

export const OopEncapsulation = () => {
  class Human {
    firstName;
    lastName;

    #secretNumber = 42;
    #hash = 90;

    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    #giveMeSecretNumber() {
      return this.#secretNumber;
    }
    getHashedSecretNumber() {
      const sn = this.#giveMeSecretNumber();
      return sn * this.#hash;
    }
    checkIfGivenNumberIsSum(num) {
      return this.getHashedSecretNumber() / num === this.#hash;
    }
  }

  const wojtek = new Human('Wojtek', 'Chowaniec');

  console.log(wojtek.getHashedSecretNumber());
  console.log(wojtek.checkIfGivenNumberIsSum(42));

  return <>Encapsulacja</>;
};
