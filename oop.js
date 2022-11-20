// Task 1: Code a Person class
//=============================
// The methods inside a class should only return what they have been created to do.
// They should not return the class itself.

class Person {
  constructor(name = "Tom", age = 20, energy = 100) {
    this.name = name;
    this.age = age;
    this.energy = energy;
  }
  sleep() {
    this.energy += 10;
    return this.energy;
  }
  doSomethingFun() {
    this.energy -= 10;
    return this.energy;
  }
}

// Task 2: Code a Worker class
//=============================

class Worker extends Person {
  constructor(xp = 0, hourlyWage = 10, name, age, energy) {
    super(name, age, energy);
    this.xp = xp;
    this.hourlyWage = hourlyWage;
  }

  goToWork() {
    this.xp += 10;
    return this.xp;
  }
}

// Task 3: Code an intern object, run methods
//============================================
// Ensure that the properties are defined in order as they appear in the worker class.
function intern() {
  let intern = new Worker(0, 10, "Bob", 21, 110);
  intern.goToWork();
  return intern;
}

// Task 4: Code a manager object, methods
//========================================
// Same drill as in task 3. Just Ensure that the properties are defined in the order, they appear in the class.
function manager() {
  const manager = new Worker(100, 30, "Alice", 30, 120);
  manager.doSomethingFun();
  return manager;
}

console.log(manager());
console.log(intern());
