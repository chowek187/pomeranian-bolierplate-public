import './styles.css';

export const ClassesBasics = () => {
  class Animal {
    age;
    type;
    static hasHead = true;
    name;

    constructor(age, type, name) {
      this.age = age;
      this.type = type;
      this.name = name;
    }

    move() {
      console.log('yup yup yup');
    }
    static sayHello() {
      console.log('hello');
    }
  }

  const animal = new Animal(12, 'cat', 'Mruczek');

  animal.move();
  Animal.sayHello();

  console.log(animal instanceof Animal);

  return <>classes</>;
};
