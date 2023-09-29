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
