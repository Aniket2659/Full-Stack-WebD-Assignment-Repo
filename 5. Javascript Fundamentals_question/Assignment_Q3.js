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
