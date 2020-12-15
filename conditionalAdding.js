// DONE

// write a function that returns the sum of all the numbers that are either 'even', or 'odd'
// if not enough numbers return "Improper Input"

const conditionalAdding = function(values, condition) {
    // Your code here
  let sum = 0;
  if (values.length <= 0) {
    sum = "Improper Input";
  } else if(condition === "even") {
    let even = values.filter(function(evenNum) {
    return 0 === evenNum % 2;
    });
    for (let i = 0; i < even.length; i++) {
      sum += even[i];
    }
    // return sum;
  } else if (condition === "odd") {
    let odd = values.filter(function(oddNum) {
    return 0 !== oddNum % 2;
    });
    for (let i = 0; i < odd.length; i++) {
      sum += odd[i];
    }
  }
  return sum;
  };
  
  console.log(conditionalAdding([1, 2, 3, 4, 5], "even"));
  // should return 6
  console.log(conditionalAdding([1, 2, 3, 4, 5], "odd"));
  // should return 9
  console.log(conditionalAdding([13, 88, 12, 44, 99], "even"));
  // should return 144
  console.log(conditionalAdding([], "odd"));
  // should return "improper input"