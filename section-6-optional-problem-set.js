/*
check if two numbers have the same frequency of numbers
i - two numbers, (543, 345) returns true
    (102, 122) returns false
o - boolean value whether or not the two numbers have the same frequency
c - O(N) time complexity
e - invalid inputs, different lengths 
*/
function sameFrequency(num1, num2) {
  //turn nums into strings
  let num1S = num1.toString();
  let num2S = num2.toString();
  //obj to hold the frequency of input
  let numObj = {};
  //check for length difference
  if (num1S.length !== num2S.length) return false;
  //for of loop to put char of num into obj
  for (const i of num1S) {
    numObj[i] ? (numObj[i] += 1) : (numObj[i] = 1);
  }
  //for of loop to check if num2 keys exisit in num1 obj
  for (const i of num2S) {
    //if false then return false
    if (!numObj[i]) return false;
  }
  //return true
  return true;
}

/*
the function check if the arguement passed into the function has duplicates
i - it can be multiple numbers or chars
areThereDuplicates(1,2,2,3) or areThereDuplicates('a','b','c','a')
o - boolean value, on whether or no the argument has duplicates
c - n/a
e - n/a
*/

function areThereDuplicates() {
  //create a obj to hold the frequencies
  let freqObj = {};
  //use arguements keywords to extract to argument passed in
  //for in loop to iterate the arguments object
  for (const value in arguments) {
    //add the frequency of argument into the object
    freqObj[arguments[value]] = (freqObj[arguments[value]] || 0) + 1;
  }

  //another for in loop to iterate the created object
  for (const key in freqObj) {
    //if there are value > 1 then there a duplicates
    //return true
    if (freqObj[key] > 1) return true;
  }
  //return false
  return false;
}

/*
averagePair takes an sorted array and target number average, check the array to determine if a pair equals to the target

I - a sorted array and target average
O - boolean value on whether a pair equals the average
C - Time - O(N) and Space - O(1)
E - empty array should return false
*/

function averagePair(array, target) {
  //variable at start
  let start = 0;
  //variable at end
  let end = array.length - 1;
  //while loop with conidition of start < end
  while (start < end) {
    // variable to hold average start + end / 2;
    let average = (array[start] + array[end]) / 2;

    //when avg is equal to target return true;
    if (average === target) {
      return true;
    }
    //else check if avg is < num then increase start
    else if (average < target) {
      start++;
    }
    //else decrease end
    else {
      end--;
    }
  }
  //return false
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
