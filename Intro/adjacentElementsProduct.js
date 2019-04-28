//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
  let max = inputArray[0] * inputArray[1];
  let current = 0;
  let subInputLength = inputArray.length - 1;
  for(let i = 0; i < subInputLength; i++) {
    current = inputArray[i] * inputArray[i + 1];
    if(current > max) {
    max = current;
    }
  }
  return max; 
}
