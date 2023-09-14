// Sposoby importu
// import * as math from './math'; to zaimportuje wszystkie wyexportowane funkcje z pliku math.js -> import waży więcej ok 4kb
//console.log(math.multiply(2, 4));
// import { add } from './math'; to zaimportuje tylko konkretne funkcje z pliku math.js -> import waży mniej ok 1kb
import './styles.css';

export function Exercise() {
  // Named Function (Funkcja z Nazwą):
  function add(a, b) {
    return a + b;
  }
  console.log(add(2, 4));

  // const add2 = (a, b) => {
  //   return a + b;
  // };
  // Anonimowa Funkcja (Funkcja Bez Nazwy):

  const square = function (x) {
    return x * x;
  };
  const double = (x) => x * 2;

  // Return types
  const firstPerson = { name: 'John', age: 24 };
  const secondPerson = { name: 'Jan', age: 34 };
  const createPerson = (name, age) => ({ name: name, age: age });
  console.log(createPerson(firstPerson.name, firstPerson.age));

  const createPersonList = (person1, person2) => [person1, person2];
  console.log(createPersonList(firstPerson, secondPerson));

  const functionTest = (age) => {
    return console.log('Moj wiek to ' + age);
  };
  functionTest(15);
  // Outer functions and innter function
  // currying - przekształcanie funkcji, która przyjmuje wiele argumentów, w sekwencję funkcji przyjmujących pojedynczy argument.

  function outerFunction(x) {
    console.log(x, 'x');
    function innerFunction(y) {
      console.log(y, 'y');
      return x + y;
    }
    return innerFunction;
  }

  const dodaj5 = outerFunction(5);
  console.log(dodaj5(12));

  // Rekurencja - funkcja wywołuje samą siebie
  // 1. Obliczanie silni, ciągu Fibonacciego i innych matematycznych wzorców.
  // 2. Przeszukiwanie i manipulowanie drzewami i grafami.
  // 3. Sortowanie (np. algorytm QuickSort).
  // 4. Wyszukiwanie w strukturach danych (np. drzewa binarne).
  // 5. Rozwiązywanie problemów kombinatorycznych (np. kombinacje, permutacje).
  function silnia(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * silnia(n - 1);
    }
  }
  console.log('silnia', silnia(4));

  // Function Arguments
  // Default Arguments (Domyślne Parametry):
  function greet(name, surname, prefix = 'Pani') {
    console.log(prefix + ' ' + name + ' ' + surname);
  }
  greet('Anna', 'Kowalska');
  // Możesz użyć operatora rozproszenia (...) w parametrach funkcji do obsługi zmiennej liczby argumentów.
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  function sort(...numbers) {
    return numbers.sort((value1, value2) => value2 - value1);
  }
  console.log('sort', sort(1, 11, 13, 4, 5, 6, 7, 8));
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));

  // Wartość vs referencja

  // Wartość
  // Wartości Przechodzą przez Wartość (Pass by Value): Typy proste, takie jak liczby, stringi, booleans, przekazywane są jako kopie swoich wartości.
  // Zmiana wartości wewnątrz funkcji nie wpływa na zmienną z zewnątrz.

  function updateNumber(num) {
    num = num * 2;
    return num;
  }
  let x = 5;
  let resultValue = updateNumber(x);
  console.log(resultValue, x);
  // Referencja
  // Referencje Przechodzą przez Referencję(Pass by Reference):
  // Typy referencyjne, takie jak obiekty i tablice, przekazywane są jako referencje do swoich danych w pamięci.
  // Funkcje operują na tych samych danych w pamięci, więc zmiany wewnątrz funkcji wpływają na zmienną z zewnątrz.
  function updateArray(arr) {
    arr.push(4);
    return arr;
  }
  let arr = [1, 2, 3];
  let updatedArray = updateArray(arr);
  console.log(updatedArray, arr);

  let x1 = 5;
  let y1 = 5;
  console.log(x1 === y1); // true bo porównujemy wartości

  let x2 = [1, 2, 3];
  let y2 = [1, 2, 3];

  console.log(x2 === y2); // false bo porównujemy referencje

  // Hoisting
  // Hoisting to zachowanie w JavaScript, w którym deklaracje zmiennych i funkcji są przenoszone na górę swojego zakresu, zanim kod zostanie wykonany. Oznacza to, że możemy używać zmiennych i funkcji przed ich faktyczną deklaracją w kodzie.
  // Komilator JS i hoisting:
  // Przed wykonaniem kodu JavaScript przechodzi przez proces kompilacji, podczas którego zbierane są deklaracje zmiennych i funkcji. Zmienne są zainicjalizowane na wartość undefined, a funkcje zostają przeniesione na górę zakresu.

  hello();

  function hello() {
    console.log('Hello');
  }

  // console.log(x3);
  // const x3 = 5;

  // Block scope

  const c = 5;
  function addTwoNumber(a) {
    return a + c;
  }
  console.log('addTwoNumber', addTwoNumber(5));

  const fibonacci = (n) => {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  console.log('fibonacci');

  // LET vs CONST vs VAR
  // LET I CONST - ZMIENNE KTÓRE SĄ DOSTĘPNE W BLOKU KODU W KTÓRYM ZOSTAŁY ZDEFINIOWANE
  // VAR - ZMIENNE KTÓRE SĄ DOSTĘPNE W FUNKCJI W KTÓREJ ZOSTAŁY ZDEFINIOWANE

  // LET - ZMIENIALNY
  // CONST - NIEZMIENIALNY (TABLICE I OBIEKTY SĄ ZMIENIALNE)

  // Dlaczego używamy let i const, a nie var?
  // var nie posiada zasięgu blokowego, co może prowadzić do nieoczekiwanych rezultatów w kodzie. W przypadku let i const, zmienne są widoczne tylko wewnątrz bloku, co poprawia czytelność i bezpieczeństwo kodu.

  // Napisz funkcje sortImmute, ktora przyjmuje jako parametr tablice cyfr i zwraca ją posortowana
  // funkcja ma nie zmieniać pierwotnej tablicy
  // const originalArr = [1, 3, 2];
  // const sortedArr = sortImmune(originalArr);
  // console.log({
  //  originalArr, // [1, 3, 2]
  //  sortedArr, // [1, 2, 3]
  // });

  // 2. napisz funkcję, która przyjmuje niezliczoną ilość argumentów - muszą to być tablice. funkcja zwraca jedną tablicę z elementami wszystkich tablic podanych w argumencie.
  // concatArr([1, 2, 3], [4, 5], [8]) -> [1, 2, 3, 4, 5, 8],

  // 3. Napisz funkcje która jako parametr przyjmuje obiekt, przechodzi po wszystkich jego polach i kapitalizuje im pierwszą literę. funkcja nie zmienia oryginalnego obiektu
  //   const originalObj = {name: 'john', surname: 'wick', age: 1000};
  // const changedObject = upperObject(originalObj) ->
  // console.log({
  //  originalObj, // {name: 'john', surname: 'wick', age: 1000}
  //  changedObject // {name: 'John', surname: 'Wick', age: 1000}
  // })

  // 4 Napisz funkcje która jako parametr przyjmuje tablice obiektów natomiast zwraca tablice z wyliczoną wartością średnią zamiast ocen.
  //funkcja ma nie zmieniać pierwotnej tablicy
  // const tablicaPierwotna = [
  //   { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
  //   { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  // ];
  // const tablicaWynikowa = calcAvr(tablicaPierwotna);
  // console.log({
  //   tablicaPierwotna, // ma pozostać nie zmieniona
  //   tablicaWynikowa,
  // });
  // // tablicaWynikowa -> [
  // // {id: 0, name: "Eve", avr: 3.14},
  // // {id: 1, name: "Eve2", avr: 3.14},
  // // ]

  // 5. stwórz funkcje, która przyjmuje dowolną liczbe argumentów za pomocą "...args" i zwraca ich sumę
  //   sumOfParam(1,2,3,4,5,6) -> x
  // sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"

  return <div>JS Function basics</div>;
}
