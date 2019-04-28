//Given an array, check if it is a Palindrome

let checkPalindrome = word => {
  reverse = "";
  wordLength = word.length
  for(let i = 0; i < wordLength; i++) {
  reverse += word.charAt(wordLength - 1 - i);
  }

  return reverse === word;
}
