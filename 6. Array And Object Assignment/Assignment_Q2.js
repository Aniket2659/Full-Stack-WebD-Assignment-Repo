const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// sorting the Given Array of Ages
ages.sort();
console.log("Sorted Array " + ages);
// min and max age
console.log(
  `The Minimum age is ${ages[0]} and maximum age is ${ages[ages.length - 1]}`
);

// finding the Median age
let Median;
if (ages.length % 2 == 0) {
  Median =
    (ages[Math.floor((ages.length - 1) / 2)] +
      ages[Math.floor((ages.length - 1) / 2) + 1]) /
    2;
} else {
  Median = ages[Math.floor((ages.length - 1) / 2) + 1];
}
console.log(`The median Age is ${Median}`);

// find the Range of the ages.
let range = ages[ages.length - 1] - ages[0];
console.log(`The Range of the ages is ${range} years`);

// Compare the values .....
if (ages[0] - Median > ages[ages.length - 1] - Median) {
  console.log("(min - average is greater)");
} else {
  console.log("(max - average is greater)");
}
