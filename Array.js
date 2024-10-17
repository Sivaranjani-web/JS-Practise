/*let arr = [9,1,10,45,22,90,8,56,67,12];
arr.sort((a, b) => b-a);

console.log("smallest element is "+arr[0]);
console.log("second smallest element is "+arr[1]);*/
let Arr = [9,1,10,45,22,90,8,56,67,12];
// Sort array in ascending order
Arr.sort((a, b) => a - b);
let minValue = Arr[0];
let minvalue1=Arr[1];
//Arr.length=10
//Arr.length-1




//Arr.sort((a, b) => b - a);
let maxValue =Arr[Arr.length-1];
let maxvalue1=Arr[Arr.length-2];
console.log("first Minimum element is:" + minValue);
console.log("second Minimum Element is:" + minvalue1);

console.log("first Maximum Element is:" + maxValue);
console.log("second Maximum Element is:" + maxvalue1);
