const numbers = [1,2,3,4,5];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 2;
}
console.log(numbers)