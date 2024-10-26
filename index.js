function hasTargetSum(numbers, targetSum) {
  
  const encounteredValues = new Set();

  // Iterate through each number in the array
  for (let currentValue of numbers) {
  
    const requiredValue = targetSum - currentValue;

    if (encounteredValues.has(requiredValue)) {
      return true;
    }

    encounteredValues.add(currentValue);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here:
   -With n being the length of the numbers array, the time complexity is O(n).
   -This is due to the fact that we do a constant-time operation on every array entry.
*/

/* 
  Add your pseudocode here:
  - Make a set to hold the values that are encountered.
  - Iterate through the numbers array's values one by one:
  - Compute the amount needed to achieve the desired total.
     - Return true in the event that the set contains the necessary value.
     - In any other case, update the set with the current value.
     - Return false if the loop finishes without locating a pair.

*/

/*
  Add written explanation of your solution here:
   - The function iterates through the numbers array using a set to record the values we come across.
   - We determine the value required for each integer in order to attain the desired total. 
   - We return true if the needed value is already present in the set since it indicates that a prior 
      number can pair with the current number to attain the desired sum. 
   - We append the current number to the set and proceed if the necessary value is not present. 
   - If no matching pair is found at the end of the loop, we return false. 
   - Because this method only makes one trip around the array, its temporal complexity is O(n).
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
