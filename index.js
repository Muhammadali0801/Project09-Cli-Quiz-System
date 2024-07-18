#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
async function runQuiz() {
    console.log(chalk.blue("Welcome to the TypeScript Quiz!"));
    const quiz = await inquirer.prompt([
        {
            name: "question_1",
            type: "list",
            message: "q1.What is TypeScript?",
            choices: [
                "A programming language",
                "A superset of JavaScript",
                "A type of database",
                "A CSS framework",
            ],
        },
        {
            name: "question_2",
            type: "list",
            message: "q2.Which keyword is used to define a variable in TypeScript?",
            choices: ["var", "let", "const", "All of the above"],
        },
        {
            name: "question_3",
            type: "list",
            message: "q3.How do you specify the type of a variable in TypeScript?",
            choices: [
                "let variableName: type",
                "let type variableName",
                "variableName: type let",
                "type: let variableName",
            ],
        },
        {
            name: "question_4",
            type: "list",
            message: "q4.What is the correct way to install TypeScript?",
            choices: [
                "npm install -g typescript",
                "npm install typescript",
                "npm install -save typescript",
                "npm get typescript",
            ],
        },
        {
            name: "question_5",
            type: "list",
            message: "q5.Which of the following is a TypeScript primitive type?",
            choices: ["number", "string", "boolean", "All of the above"],
        },
        {
            name: "question_6",
            type: "list",
            message: "q6.How do you compile a TypeScript file named 'app.ts' to JavaScript?",
            choices: [
                "tsc app.ts",
                "tsc compile app.ts",
                "typescript app.ts",
                "node app.ts",
            ],
        },
        {
            name: "question_7",
            type: "list",
            message: "q7.Which of the following is a valid way to create an interface in TypeScript?",
            choices: [
                "interface Person { name: string; age: number; }",
                "interface Person { name: string; age: number }",
                "interface Person { name: string; age: number; }",
                "interface Person { name: string; age: number }",
            ],
        },
        {
            name: "question_8",
            type: "list",
            message: "q8.Which TypeScript feature allows you to catch errors at compile time rather than at runtime?",
            choices: [
                "Dynamic typing",
                "Static typing",
                "Polymorphism",
                "Encapsulation",
            ],
        },
        {
            name: "question_9",
            type: "list",
            message: "q9.Which of the following TypeScript feature helps to describe the shape of an object?",
            choices: ["Modules", "Namespaces", "Interfaces", "Generics"],
        },
        {
            name: "question_10",
            type: "list",
            message: "q10.How can you define an optional property in a TypeScript interface?",
            choices: [
                "propertyName?: type",
                "propertyName: type?",
                "propertyName: type | undefined",
                "propertyName: ?type",
            ],
        },
    ]);
    let score = 0;
    switch (quiz.question_1) {
        case "A superset of JavaScript":
            console.log(chalk.green("1. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("1. Incorrect!"));
    }
    switch (quiz.question_2) {
        case "All of the above":
            console.log(chalk.green("2. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("2. Incorrect!"));
    }
    switch (quiz.question_3) {
        case "let variableName: type":
            console.log(chalk.green("3. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("3. Incorrect!"));
    }
    switch (quiz.question_4) {
        case "npm install -g typescript":
            console.log(chalk.green("4. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("4. Incorrect!"));
    }
    switch (quiz.question_5) {
        case "All of the above":
            console.log(chalk.green("5. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("5. Incorrect!"));
    }
    switch (quiz.question_6) {
        case "tsc app.ts":
            console.log(chalk.green("6. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("6. Incorrect!"));
    }
    switch (quiz.question_7) {
        case "interface Person { name: string; age: number; }":
            console.log(chalk.green("7. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("7. Incorrect!"));
    }
    switch (quiz.question_8) {
        case "Static typing":
            console.log(chalk.green("8. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("8. Incorrect!"));
    }
    switch (quiz.question_9) {
        case "Interfaces":
            console.log(chalk.green("9. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("9. Incorrect!"));
    }
    switch (quiz.question_10) {
        case "propertyName?: type":
            console.log(chalk.green("10. Correct!"));
            ++score;
            break;
        default:
            console.log(chalk.red("10. Incorrect!"));
    }
    console.log(chalk.blue(`Score: ${score}`));
    const replay = await inquirer.prompt([
        {
            name: "replay",
            type: "confirm",
            message: "Do you want to retake the quiz?",
        },
    ]);
    if (replay.replay) {
        runQuiz();
    }
    else {
        console.log(chalk.yellow("Thank you for taking the quiz!"));
        process.exit();
    }
}
runQuiz();
