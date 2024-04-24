class Person {
    constructor(name, age, gender) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  }
  const person1 = new Person('Ram', 25, 'Male');
  const person2 = new Person('seetha', 30, 'Female');
  
  person1.displayDetails();
  person2.displayDetails();


  