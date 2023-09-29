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

  return <>dziedziczenie</>;
};

// Stworzymy klasę komputera z poniższymi właściwościami:
// 1) prywatną zmienną (ulubione słowo) - faveWord = "I compute!"
// 2) prywatną metodę - add(x: number, y: number) - która zwraca sumę x i y
// 3) publiczną metodę compute - która przyjmuje 3 argumenty: 2 liczby, które chcemy do siebie dodać, oraz argument typu number, który pomnoży wynik dodawania dwóch poprzednich argumentów ( wewnątrz użyć metody add )
// 4) publiczną metodę introduce() - która wyprintuje ulubione słowo
// 5) poużywaj metod mini komputera

// export const OopEncapsulation = () => {
//   class Computer {
//     #faveWord = 'I compute!';

//     #add(x, y) {
//       return x + y;
//     }

//     compute(a, b, multiplyer) {
//       return this.#add(a, b) * multiplyer;
//     }

//     introduce() {
//       return this.#faveWord;
//     }
//   }

//   const computer = new Computer();

//   console.log(computer.compute(1, 2, 2));

//   console.log(computer.introduce());

//   return <>enkapsulacja</>;
// };
