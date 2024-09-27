let numbers = [1,2,3,4,5];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 2;
}

let arr = [1,2,3,4,5];
let result = arr.map(x => x * 2);
console.log(result);

for (let numb of numbers) {
console.log(numb * 2)}


console.log(numbers)