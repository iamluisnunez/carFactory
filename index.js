class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getDescription() {
    return `Your car is a ${this.make} ${this.model} of the year ${this.year}.`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  getDescription() {
    return `Your electric car is a ${this.make} ${this.model} of the year ${this.year} with a range of ${this.range} miles.`;
  }
}

const myCar = new Car("Alfa Romeo", "Giulia", 2019);
const electric = new ElectricCar("Tesla", "Model S Plaid", 2023, 300);

console.log(myCar.getDescription());
console.log(electric.getDescription());
