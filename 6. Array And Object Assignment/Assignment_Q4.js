let student = [
  { id: 1, firstName: "john", lastName: "Doe", age: 20, grade: "A" },
  { id: 2, firstName: "james", lastName: "Smith", age: 23, grade: "B" },
];

// function to add Student To the record.
function addStudentRecord(id, fName, lName, age, grade) {
  const newObject = {
    id: id,
    firstName: fName,
    lastName: lName,
    age: age,
    grade: grade,
  };
  student.push(newObject);
  console.log(student);
}

// function to Update the student record based on ID.
function updateStudentRecord(id, newInfo) {
  // find the index of the given id
  const index = student.findIndex((student) => student.id === id);

  if (index != -1) {
    student[index] = { ...student[index], ...newInfo };
    console.log(`Student record Update with Id ${id}`);
    console.log(student);
  } else {
    console.log(`student record with Id ${id}  NOT FOUND!`);
  }
}

// function to delete the Student record based on the id.
function deleteStudentRecord(id) {
  // finding the index of the student
  const index = student.findIndex((student) => student.id === id);

  if (index != -1) {
    student.splice(index, 1);
    console.log(`student record with ID ${id} deleted!`);
    console.log(student);
  } else {
    console.log(`student record with ID ${id} NOT FOUND!`);
  }
}

// function to Display the List of All the Student.
function listStudentRecord() {
  // listing The Student Record.
  console.log("**********Student Record***************");
  student.map((student) => {
    console.log(
      `Id: ${student.id} Student Name: ${student.firstName} ${student.lastName} Age : ${student.age} Grade: ${student.grade}`
    );
  });
}

// function to show Students with specfic Grade.
function studentOfSpecificGrade(grade) {
  const index = student.findIndex((student) => student.grade === grade);
  if (index != -1) {
    console.log(`***********Student List OF Grade ${grade}************`);
    student.map((student) => {
      if (student.grade === grade) {
        console.log(
          `ID: ${student.id} Student Name: ${student.firstName} ${student.lastName}  Age: ${student.age} Grade: ${student.grade}`
        );
      }
    });
  } else {
    console.log(`No Student With Grade ${grade} Found!`);
  }
}

// function to Calculate Average Age of students.
function averageAgeOfStudent() {
  const sumOfAge = student.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0
  );
  console.log(
    `The Average Age of the Student is: ${sumOfAge / student.length}`
  );
}

// Adding Student to the Record.
addStudentRecord(3, "Aniket", "Kumar", 22, "A+");
// updating the Record of the Student.
updateStudentRecord(3, {
  firstName: "Ani",
  lastName: " Kum",
  age: 12,
  grade: "D",
});
// deleting the student From the record with id.
deleteStudentRecord(3);
// listing the student from the record
listStudentRecord();
// Listing the student With Specific Grade
studentOfSpecificGrade("A");
// Average of Age Of Students
averageAgeOfStudent();
