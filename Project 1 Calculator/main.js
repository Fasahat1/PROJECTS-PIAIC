#!/usr/bin/env node
// first is called shibang second is called ye node.js ki location nikal kar dede ke ye node yahan install hai toh wo yahan se nikal kar dedega third is called ke node per chalana hai.
//CALCULATOR ASSIGNMENT      
//inquirer
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("Hi,Welcome"));
console.log(chalk.blue("Calculator"));
let answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "num2"
    },
    {
        messgae: "Select operator",
        type: "list",
        choices: ["+", "-", "/", "*", "**"],
        name: "operator",
        message: "Enter your operation"
    }
]);
let result;
if (answer.operator === "+") {
    result = answer.num1 + answer.num2;
}
else if (answer.operator === "-") {
    result = answer.num1 - answer.num2;
}
else if (answer.operator === "/") {
    result = answer.num1 / answer.num2;
}
else if (answer.operator === "*") {
    result = answer.num1 * answer.num2;
}
else if (answer.operator === "**") {
    result = answer.num1 ** answer.num2;
}
else {
    console.log(chalk.gray("Your operator is invalid"));
}
console.log(chalk.green("Your result is:", result));
console.log(chalk.red("THANK YOU!"));
