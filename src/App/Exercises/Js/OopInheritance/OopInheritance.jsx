export const OopInheritance = () => {
  class Animal {
    type;
    pawsCount;
    eyesColor;

    speak(voice) {
      return voice;
    }
  }

  class Cat extends Animal {
    hasThreeEyelids = true;
    canMeow = true;

    constructor(pawsCount, eyesColor) {
      super();
      this.type = 'Cat';
      this.pawsCount = pawsCount;
      this.eyesColor = eyesColor;
    }
  }

  class Dog extends Animal {
    canBark = true;

    constructor(pawsCount, eyesColor) {
      super();
      this.type = 'Dog';
      this.pawsCount = pawsCount;
      this.eyesColor = eyesColor;
    }
  }

  const dog = new Dog(4, 'brown');

  const cat = new Cat(3, 'green');

  console.log(dog.speak('hau hau'));

  console.log(cat.speak('miau miau'));

  return <>dziedziczenie</>;
};

// stwórz klasę Person posiadającą metodę, która wyświetli nam komunikat
// introduce() => "I am a Person"
// następnie stwórz dwie podklasy Builder i Doctor, dziedziczące metodę i wyświetlające odpowiednio komunikat
// introduce() => "I am a Person", "I am also a Doctor"
// introduce() => "I am a Person", "I am also a Builder"
// następnie stwórz podklasę Doctor: Pediatrician - metoda ma wyświetlić jedynie : introduce() => "I'm a Pediatrician"

// export const OopInheritance = () => {
//   class Person {
//     introduce() {
//       console.log('I am a Person');
//     }
//   }

//   class Builder extends Person {
//     introduce() {
//       super.introduce();
//       console.log('I am also a Builder');
//     }
//   }

//   class Doctor extends Person {
//     introduce() {
//       super.introduce();
//       console.log('I am also a Doctor');
//     }
//   }

//   class Pediatrician extends Doctor {
//     introduce() {
//       console.log("I'm a Pediatrician");
//     }
//   }

//   const person = new Person();
//   person.introduce();

//   const builder = new Builder();
//   builder.introduce();

//   const doctor = new Doctor();
//   doctor.introduce();

//   const pediatrician = new Pediatrician();
//   pediatrician.introduce();
