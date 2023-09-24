class Person {
  firstName;
  lastName;
  age;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    this.firstName = newFirstName;
  }

  get firstName() {
    return this.firstName;
  }

  set lastName(newLastName) {
    this.lastName = newLastName;
  }

  get lastName() {
    return this.lastName;
  }

  set age(newAge) {
    this.age = newAge;
  }

  get age() {
    return this.age;
  }

  set fullName(newFullName) {
    this.fullName = newFullName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);