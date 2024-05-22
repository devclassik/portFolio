const questions = [
    {
        questionText: 'What does the typeof operator return for a number?',
        answerOptions: [
            { answerText: 'String', isCorrect: false },
            { answerText: 'Nomber', isCorrect: false },
            { answerText: 'Object', isCorrect: false },
            { answerText: 'Number', isCorrect: true },
        ],
    },
    {
        questionText: 'What does the === operator check?',
        answerOptions: [
            { answerText: 'Value and type', isCorrect: true },
            { answerText: 'Value only', isCorrect: false },
            { answerText: 'Type only', isCorrect: false },
            { answerText: 'None of the above', isCorrect: false },
        ],
    },
    {
        questionText: 'Which keyword is used to declare a variable in JavaScript?',
        answerOptions: [
            { answerText: 'let', isCorrect: false },
            { answerText: 'variable', isCorrect: false },
            { answerText: 'var', isCorrect: true },
            { answerText: 'const', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the result of 5 + "5" in JavaScript?',
        answerOptions: [
            { answerText: '10', isCorrect: false },
            { answerText: '55', isCorrect: true },
            { answerText: 'Error', isCorrect: false },
            { answerText: 'Undefined', isCorrect: false },
        ],
    },
    {
        questionText: 'Which built-in method returns the length of a string?',
        answerOptions: [
            { answerText: 'length()', isCorrect: false },
            { answerText: 'size()', isCorrect: false },
            { answerText: 'count()', isCorrect: false },
            { answerText: 'length', isCorrect: true },
        ],
    },
    {
        questionText: 'What is the result of true + false in JavaScript?',
        answerOptions: [
            { answerText: 'true', isCorrect: false },
            { answerText: 'false', isCorrect: false },
            { answerText: '1', isCorrect: true },
            { answerText: '0', isCorrect: false },
        ],
    },
    {
        questionText: 'How do you declare a function in JavaScript?',
        answerOptions: [
            { answerText: 'function myFunction()', isCorrect: true },
            { answerText: 'myFunction()', isCorrect: false },
            { answerText: 'declare function myFunction()', isCorrect: false },
            { answerText: 'def myFunction()', isCorrect: false },
        ],
    },
    {
        questionText: 'What does the Array.isArray() method check?',
        answerOptions: [
            { answerText: 'If a variable is an array', isCorrect: true },
            { answerText: 'If a variable is a function', isCorrect: false },
            { answerText: 'If a variable is an object', isCorrect: false },
            { answerText: 'If a variable is a string', isCorrect: false },
        ],
    },
    {
        questionText: 'Which method is used to add a new element to the end of an array?',
        answerOptions: [
            { answerText: 'push()', isCorrect: true },
            { answerText: 'append()', isCorrect: false },
            { answerText: 'add()', isCorrect: false },
            { answerText: 'insert()', isCorrect: false },
        ],
    },
    {
        questionText: 'What is the result of typeof undefined in JavaScript?',
        answerOptions: [
            { answerText: 'Undefine', isCorrect: false },
            { answerText: 'Null', isCorrect: false },
            { answerText: 'Undefined', isCorrect: true },
            { answerText: 'Error', isCorrect: false },
        ],
    },
];


export default questions;