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

  // Capturing group 1: day
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
