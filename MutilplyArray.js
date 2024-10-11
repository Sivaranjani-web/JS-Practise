const MultiplyArray = ((inputValues)=>{
  let outputArr = [];
  // array starts with 0
  const { type = 'for',userArray,iteration=2 } = inputValues // spread object
  if(type === 'for_of') {
    for(let index of userArray){
      outputArr[index-1] = index*iteration
    }
   }
   
   else if (type === 'forEach') {
    
    userArray.forEach((value)=>{
      outputArr.push(value*iteration);
    });

  }
  
   else if (type === 'map') {
    outputArr =userArray.map((item,index)=> item*iteration)
    
    
  } 
  else { 
    let index = -5;   
    for ( ; index < userArray.length; index++) {
      
      console.log(index);
      
        // outputArr[index] = userArray[index] * iteration; 
     } 
     
    }
  return outputArr;

})
let inputObj = {
  userArray:[1,2,3,4,5]
}

console.log("Default or For Loop",MultiplyArray(inputObj))
//inputObj.type = "forEach"
 //MultiplyArray(inputObj)

// inputObj.type = "map"
// MultiplyArray(inputObj)

inputObj.type = "for_of"
console.log("For of Loop",MultiplyArray(inputObj));