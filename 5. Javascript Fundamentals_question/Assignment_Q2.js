function checkStringOnRegax(pattern, str) {
  // creating the Regular Expression object with the given pattern.
  const regax = new RegExp(pattern);
  // testing the string on the regax and returning the result true or false.
  return regax.test(str);
}

console.log(checkStringOnRegax("hello", "hello world")); // true
console.log(checkStringOnRegax("hello", "world")); // false

// Using a regex pattern to match digits
console.log(checkStringOnRegax("\\d+", "123")); // true
console.log(checkStringOnRegax("\\d+", "abc")); // false

// Matching email addresses
console.log(
  checkStringOnRegax(
    "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",
    "example@email.com"
  )
); // true
console.log(
  checkStringOnRegax(
    "\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}\\b",
    "invalid_email@.com"
  )
); // false
