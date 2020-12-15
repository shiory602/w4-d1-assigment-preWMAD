//DONE

// write a function that counts the number of vowels in a given string and returns that value
// one potential solution may use the charAt() method, but this isnt the only solution
// you may alsop find the .contains() method useful.
//another useful couple of methods could be .split and .join
// charAt(n) n+1を抽出、contains(clazz) 指定したクラスが含まれているか 

const vowelCounter = function(data) {
  // Put your solution here
  let vowel = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "i" || data[i] === "u" || data[i] === "e" || data[i] === "o") {
      vowel++;
    }
  }
  return vowel;
};
  
  console.log(vowelCounter("orange"));
  // should return 3
  console.log(vowelCounter("Cornerstone"));
  // should return 4
  console.log(vowelCounter("aeiou"));
  // should return 5