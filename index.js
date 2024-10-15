const prompt = require('prompt-sync')();
let firstNumber,secondNumber,Operator,result;
firstNumber=Number(prompt("Enter the first number "))
secondNumber=Number(prompt("Enter the second number "))
Operator=prompt("Enter the Operator ")
// Operator will be add,sub,mul,divide,mod,exponential,

    if(Operator === 'add')
    {
        result = `result is ${firstNumber+secondNumber}`
    }    
    else if(Operator === 'sub')    
    {
        result=`result is ${firstNumber-secondNumber}`
    }
    else if(Operator ==='mul')
    {
        result=`result is ${firstNumber*secondNumber}`
    }   
    else if(Operator ==='div')
    {
        result=`result is ${firstNumber%secondNumber}`

    }    
    else if(Operator === 'mod')
    {
        result=`result is ${firstNumber/secondNumber}`
    }
    else if(Operator ==='exp')
    {
        result=`result is ${firstNumber**secondNumber}`
    }
    else{
       result=`undefined value` 
    }
    console.log(result)
    