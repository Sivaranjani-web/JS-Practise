const inputArr = [1,2,3,4,5]
// v - value, i-index a-array
// Using forEach doesn't returns array or anything
// forEach doesn't support method chainning
let sumArr = 0
let sumArr1 = 0
const newValueForeach = inputArr.forEach((value)=>{
    sumArr+=value
})

console.log(newValueForeach)

const newValueMap = inputArr.map((value)=>{
    return sumArr1+=value
})

console.log(newValueMap)
// sorting algrithm in js