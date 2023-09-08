/*export const JsNumbersTraining = () => {
  let age = 18;
  let hasDriverLicense = true;
  let hasCar = true;
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age >= 18) {
      if (hasDriverLicense) {
        if (hasCar) {
          return 'You can drive your car!';
        } else {
          return 'You can drive a rental car.';
        }
      } else {
        return "You can't drive without a driver's license.";
      }
    } else {
      return 'You are too young to drive.';
    }
  }
  function hasEnough(hasEnough) {
    if (hasEnough) {
      return true;
    } else {
      return false;
    }
  }

  console.log(canDrive(18, true, true));
  console.log(hasEnough(true));

  return <div>{Math.random()}</div>;
};
*/

export const JsNumbersTraining = () => {
  function canDrive(age, hasDriverLicense, hasCar) {
    if (age < 18) {
      return 'You are too young to drive.';
    }

    if (!hasDriverLicense) {
      return "You can't drive without a driver's license.";
    }

    return hasCar ? 'You can drive your car!' : 'You can drive a rental car.';
  }

  function hasEnough(hasEnough) {
    return hasEnough;
  }
  function isStingShort(value) {
    return value.legnth < 10;
  }

  function changeGradeToText() {}

  console.log(changeGradeToText('1'));
  function changeGradeToText(grade) {
    if (grade > 6 || grade < 1) {
      return 'błąd';
    }
    if (grade === 1) {
      return 'jeden';
    }
    if (grade === 2) {
      return 'dwa';
    }
    if (grade === 3) {
      return 'trzy';
    }
    if (grade === 4) {
      return 'cztery';
    }
    if (grade === 5) {
      return 'pięć';
    }
    if (grade === 6) {
      return 'sześć';
    }
  }

  function ownMax(a, b) {
    if (a > b) {
      return a;
    }
    if (a < b) {
      return b;
    }
    if (a === b) {
      return a;
    }
  }

  console.log(ownMax(3, 3));

  return <div>JS Numbers Training</div>;
};
