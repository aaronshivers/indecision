// eslint-disable-next-line max-classes-per-file
class Person {
  constructor(name = 'Unknown', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

// class Student extends Person {
//   constructor(name, age, major) {
//     super(name, age);
//     this.major = major;
//   }
//
//   hasMajor() {
//     return !!this.major;
//   }
//
//   getDescription() {
//     return this.hasMajor()
//       ? `${super.getDescription()} Their major is ${this.major}`
//       : super.getDescription();
//   }
// }

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    return this.homeLocation ? `${super.getGreeting()}. I'm visiting from ${this.homeLocation}.` : super.getGreeting();
  }
}

const me = new Traveler('Barf Wellington', 75, 'Frankfurt');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
