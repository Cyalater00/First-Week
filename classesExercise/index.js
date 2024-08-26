// == Liberay system == //
// class Library {
//   constructor(buildingName, numberOfBooks) {
//     this.buildingName = buildingName;
//     this.numberOfBooks = numberOfBooks;
//   }
//   greetings() {
//     console.log(`Welcome to ${this.buildingName}`);
//   }
// }

// const riverDaleLibrary = new Library("RiverDale", 25);
// console.log(riverDaleLibrary);
// riverDaleLibrary.greetings();

// const yaleLibrary = new Library("Yale Library", 500000);
// console.log(yaleLibrary);
// yaleLibrary.greetings();

// class Librarian extends Library {
//   constructor(name) {
//     super("Library of Congress", 100000);
//     this.name = name;
//   }
//   greetings() {
//     console.log(
//       `Welcome to the wonderful ${this.buildingName}. My name is ${this.name}, how can I help you?`
//     );
//   }
// }

// const Alice = new Librarian("Alice");
// Alice.greetings();


// == Bank == //
// class Bank {
//   constructor(bankName, BranchID, location) {
//     this.bankName = bankName;
//     this.BranchID = BranchID;
//     this.location = location;
//   }
//   greetings() {
//     console.log(
//       `Welcome to ${this.bankName} at branch ${this.BranchID} at ${this.location}`
//     );
//   }
// }

// const bankOfamerica = new Bank("Bank of America", 1234567, "New York");
// bankOfamerica.greetings();
// console.log(bankOfamerica);

// class Account extends Bank {
//   constructor(accountNumber, routingNumber, custormerName, accountType) {
//     super("Bank of America", 1234567, "New York");
//     this.accountNumber = accountNumber;
//     this.routingNumber = routingNumber;
//     this.custormerName = custormerName;
//     this.accountType = accountType;
//   }
// }
// const account1 = new Account(123456789, 987654321, "Jan Doe", "savings");
// account1.greetings();
// console.log(account1);

// const account2 = new Account(12345678, 987654321, "john Doe", "checking");
// account2.greetings();
// console.log(account2);


// == student== //
// class School {
//   constructor(schoolName, schoolID, location) {
//     this.schoolName = schoolName;
//     this.schoolID = schoolID;
//     this.location = location;
//   }
//   greetings() {
//     console.log(`Welcome to ${this.schoolName} at campus ${this.schoolID} in ${this.location}`);
//   }
// }
// const uncc = new School("UNC Charlotte", 1234, "Charlotte");
// uncc.greetings();
// console.log(uncc);

// class Student extends School {
//   constructor(studentName, studentID, email) {
//     super("UNC Charlotte", 1234, "Charlotte");
//     this.studentName = studentName;
//     this.studentID = studentID;
//     this.email = email;
//   }
// }

// const student1 = new Student("Jane Doe", 1234, "janedoe@uncc.edu");
// student1.greetings();
// console.log(student1);


// = IN CLASS EXCERSIE == // 
class Learner {
  // Private Properties
  #grades = [];

  #name = {
    first: "",
    last: "",
  };

  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }

  // Returns the full-name
  get name() {
    return `${this.#name.first} ${this.#name.last}`;
  }

  get age() {
    return this.#age;
  }

  get grades() {
    return this.#grades;
  }

  get average() {
    const arr = [...this.#grades]; // makes a copy of the #grades
    arr.sort((a, b) => a - b).shift(); // sort lower to higher and remove the first element in the sorted array

    // add all grades, divide them by the length of the array
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  set grades(grade) {
    grade = Number(grade);

    if (grade >= 0 && grade <= 100) {
      this.#grades.push(grade);
    }
  }

  addGrades(...grades) {
    // Flatten the array
    grades = grades.flat();

    // Loop over and access each grade
    grades.forEach((grade) => {
      // Convert the grade to a number
      grade = Number(grade);

      // Check that we stay in the 0 to 100 range
      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade); // Push grade to the #grades
      }
    });
  }
}

const max = new Learner("Max", "Pain", 30);

console.log(max.name);
console.log(max.age);

// Calling the grades setter
max.grades = 80;
max.grades = 100;
max.grades = 70;

// Getting the array of grades
console.table(max.grades);

// Adding more grades
max.addGrades(["50", "40", 30, -60], [66, 33, 88, -100], [77, 84, 98]);

// Getting the average grade
console.log(max.average.toFixed(0));

console.log(max instanceof Learner);
console.log(max instanceof Object);
console.log(max);

// ========================================
// Grades Utility Class

class Grades {
  static getAverage(...grades) {
    const arr = [];

    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        arr.push(grade);
      }
    });

    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}
// console.log(Grades.getAverage(99, 67, 55, [77, 89, 45]));
