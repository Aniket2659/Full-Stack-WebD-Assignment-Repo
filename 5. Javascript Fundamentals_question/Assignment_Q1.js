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
