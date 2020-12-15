// DONE

// function will take in an array, and add the two biggest numbers in the array

const addLargestNumbers = function(data) {
  // Put your solution here
  let sum = 0;
    let max = Math.max.apply(null, data);
    data.splice(data.indexOf(max), 1);
    let secMax = Math.max.apply(null, data);

    sum = max + secMax;
  return sum;
  };
  
  console.log(addLargestNumbers([1, 10]));
  // should return 11
  console.log(addLargestNumbers([1, 2, 3]));
  // should return 5
  console.log(addLargestNumbers([10, 4, 34, 6, 92, 2]));
  // should return 126