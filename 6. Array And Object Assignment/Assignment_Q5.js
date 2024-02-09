const student = {
  name: "Alice",
  age: 22,
  major: "Computer Science",
  GPA: 3.8,
  isEnrolled: true,
};

function displayStudentinfo(student) {
  for (let key in student) {
    if (student.hasOwnProperty(key)) {
      console.log(`property: ${key}  value: ${student[key]}`);
    }
  }
}
displayStudentinfo(student);
