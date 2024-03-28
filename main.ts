#! /usr/bin/env node
//shabang is the name of upper path
import inquirer from "inquirer";
import chalk from "chalk";

const anwsers :{
    numberOne: number,
    numberTwo: number,
    operator: string,
} = await inquirer.prompt([
    { type: "number",
     name: "numberOne",
     message: "Enter your First number"
    },
    { type:"number", 
     name: "numberTwo",
     message:"Enter your second number",
    },
    { type:"list",
     name:"operator",
     message:"Enter your operators",
     choices:["Add", "Subtract", "Multiply", "Divide"]}

]); 
    const{numberOne ,numberTwo , operator}=anwsers;

    let result 

    switch (operator) {
        case "Add":
            result = numberOne + numberTwo;
            break;
        case "Subtract":
            result = numberOne - numberTwo;
            break
        case "Divide":
            result = numberOne / numberTwo;
            break;
        case "Multiply":
            result = numberOne * numberTwo;
            break;
            default:
                console.log("Invalid operator select another operation");
    } console.log((chalk.bold.green)(`${numberOne} ${operator} ${numberTwo}  = ${result}`));
    
    


