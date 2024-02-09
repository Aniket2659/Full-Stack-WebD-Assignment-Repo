// Object Extensibility and sealing

// making an Object "student"
const student = {};
// making the object student unExtensible
Object.preventExtensions(student);
// checking The Status of Extensibility of student;
const extensibleStatus = Object.isExtensible(student);
console.log(`Extensible Status of student object: ${extensibleStatus}`);

// Creating a new object "teacher"
const teacher = {
  subject: "Math",
};
// sealing the teacher object.
Object.seal(teacher);
// checking the status of Sealing of teacher Object
const sealedStatus = Object.isSealed(teacher);
console.log(`Seal Status of teacher Object: ${sealedStatus}`);
