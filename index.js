function isPalindrome(word) {
  return word === [...word].reverse().join("");
}

/* 
  Add your pseudocode here

  initalize Algotrithme
  revserse the word
  if revsersed word equals the word 
  return true
  else 
  return false

*/

/*
  Add written explanation of your solution here

  create an array from the string word
  revserse the array 
  join the array so it becomes a string again
  compare between the word and its revserse
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
