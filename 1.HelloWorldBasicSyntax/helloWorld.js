var oldSchoolVariableHelloWorld = "Hello World from 1999 used variable, var"
let modernVariableHelloWorld = "Hello World from modern variable, let"
const constantHelloWorld = "Hello, World! from an external file";

console.log("Using numbers, 9007199254740991 + 1 =",9007199254740991 + 1); // (2*pow(53)-1) +1 = 9007199254740992, 2*pow(53)-1 is the limit for safe number data type representation
console.log("Using numbers, 9007199254740991 + 2 =",9007199254740991 + 2); // 9007199254740992 too, for equal or larger numbers than this we use bigInt
const bigInt = 9007199254740991n; // Created by appending an n at the end of the number
console.log(`big int used, 9007199254740991 + 2 = ${bigInt + 2n}`);

console.log(oldSchoolVariableHelloWorld);
console.log(modernVariableHelloWorld);
alert(constantHelloWorld);
