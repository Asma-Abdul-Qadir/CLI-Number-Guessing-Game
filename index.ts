#!/usr/bin/env node
import inquirer from "inquirer"
console.log("\n\tWelcome to the CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() *10 + 1);
const answer= await inquirer.prompt([{
    name:"Userguessnumber",
    type:"number",
    message:"Please guess a number between 1-10:",
},
]);
if(answer.userguessednumber === randomNumber){
    console.log("Congratulation ! you guess a right number.");
    }
    else{
        console.log("Sorry, you guess a wrong number try again");
    }