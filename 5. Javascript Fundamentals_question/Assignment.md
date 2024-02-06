# JavaScript Fundamentals Question Assignment

### Q1. Write a JavaScript function called outerFunction that takes a parameter and returns an inner function.The inner function should access both the parameter of outerFunction and a variable declared within outerFunction. Demonstrate how lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing.

```
function outerFunction(num) {
  // Inside the outerFunction.
  console.log("Inside the outerFunction.");

  // variable defined inside the Outer Function Scope
  const squareOfNum = num * num;
  console.log(`square Of Number is : ${squareOfNum}`);
  // inner Function
  const innerFunction = () => {
    console.log("Inside The Inner Function.");
    // using the parameter which is defined in the outer function scope and th variable of the outer function
    const CubeOfNum = squareOfNum * num;
    console.log(`The Cube of the Number ${num}  is :` + CubeOfNum);
    console.log("Inner function End.");
  };

  console.log("Outer function End.");
  return innerFunction();
}

outerFunction(10);

```

![output](<./output/Screenshot%20(396).png>)

### Q2. Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function that takes a regex pattern and a string as input and returns true if there is a match, and false otherwise. Test the function with various patterns and strings.

```
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

```

![Output](<./output/Screenshot%20(398).png>)

### Q3. Write a JavaScript program that demonstrates the use of character classes in regular expressions. Create a function that searches for specific character classes in a given string and returns the matches. Test the function with patterns for digits, uppercase letters, lowercase letters, and special characters.

```
function findCharacterClassMatches(str) {
  // Define the regular expressions for character classes
  var digitRegex = /\d/g;
  var uppercaseRegex = /[A-Z]/g;
  var lowercaseRegex = /[a-z]/g;
  var specialCharRegex = /[^A-Za-z0-9]/g; // Matches any character that is not a letter or a digit

  // Find matches for each character class
  var digitMatches = str.match(digitRegex) || [];
  var uppercaseMatches = str.match(uppercaseRegex) || [];
  var lowercaseMatches = str.match(lowercaseRegex) || [];
  var specialCharMatches = str.match(specialCharRegex) || [];

  // Return an object containing matches for each character class
  return {
    digits: digitMatches,
    uppercaseLetters: uppercaseMatches,
    lowercaseLetters: lowercaseMatches,
    specialCharacters: specialCharMatches,
  };
}

// Test cases
var testString = "Hello World! 123";
var matches = findCharacterClassMatches(testString);
console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialCharacters);

```

![output](<./output/Screenshot%20(400).png>)

### Q4. Create a JavaScript program that takes a regex pattern and a string as input. Write a function that not only checks if there is a match but also extracts specific parts of the matched text using groups. Test the function with patterns that include groups to capture different parts of a date (e.g., day, month, and year) from a given string.

```
function extractMatchedParts(pattern, str) {
  // Creating a regular expression object with the provided pattern
  var regex = new RegExp(pattern);

  // Executing the regex against the string
  var match = regex.exec(str);

  // If there is no match, return null
  if (!match) {
    return null;
  }

  // Extracting specific parts using groups
  var matchedParts = {
    fullMatch: match[0],
  };

  // Capturing group 1: day+
  if (match[1]) {
    matchedParts.day = match[1];
  }

  // Capturing group 2: month
  if (match[2]) {
    matchedParts.month = match[2];
  }

  // Capturing group 3: year
  if (match[3]) {
    matchedParts.year = match[3];
  }

  return matchedParts;
}

// Test cases for date pattern (dd-mm-yyyy)
var testString = "Today's date is 05-02-2024";
var datePattern = /(\d{2})-(\d{2})-(\d{4})/;
var result = extractMatchedParts(datePattern, testString);
console.log("Matched Parts:", result);

```

![output](<./output/Screenshot%20(402).png>)

### Q5. You are building a shipping application. Write a program that takes the type of package ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

```
function calculateDeliveryTime(packageType) {
  switch (packageType) {
    case "standard":
      console.log("Estimated delivery time for standard package: 3-5 days");
      break;
    case "express":
      console.log("Estimated delivery time for express package: 1-2 days");
      break;
    case "overnight":
      console.log("Estimated delivery time for overnight package: next day");
      break;
    default:
      console.log(
        "Invalid package type. Please choose 'standard', 'express', or 'overnight'."
      );
  }
}

// Test cases
calculateDeliveryTime("standard");
calculateDeliveryTime("express");
calculateDeliveryTime("overnight");
calculateDeliveryTime("priority"); // Testing with an invalid package type

```

![output](<./output/Screenshot%20(404).png>)
