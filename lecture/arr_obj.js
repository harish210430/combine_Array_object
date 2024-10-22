// Define Array inside an Object & obj inside Obj.

let studentOne = {
    name: "John",
    age: 24,
    isAdult: true,
    favFruit: ["Mango", "Litchi", "Grapes"] // Array
};

console.log(studentOne.favFruit[1]); // Litchi
console.log(studentOne.isAdult); // true

// Array and Object inside Object.

let studentTwo = {
    name: "Tiger",
    age: 5,
    isAdult: false,
    newStudent: studentOne, // Object
    favFruits: ["Orange", "Papaya", "Apple", "Banana"] // Array
};
console.log(studentTwo.newStudent.favFruit[0]); // Mango
console.log(studentTwo.age); // 5 
console.log(studentTwo.favFruits[1]); // Papaya

// Objects inside Array.
let student = [studentOne, studentTwo];
console.log(student[0].name); // John
console.log(student[0].age); // 24
console.log(student[0].favFruit[2]); // Grapes
console.log(student[1].name); // Tiger
console.log(student[1].age); // 5
console.log(student[1].favFruits[3]); // Banana
console.log(student[1].newStudent.age); // 24
console.log(student[1].newStudent.favFruit[0]); // Mango 


