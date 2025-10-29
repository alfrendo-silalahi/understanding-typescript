console.log("Hello world!");

// define variable with type
let username: string;

username = "Alfrendo Silalahi";

// define variable with inference type
let active = true;

// define function using typed parameter
function sayHello(name: string) {
  console.log(`Hello ${name}`);
}

sayHello("Alfrendo");

// type 'any'
let age: any = 25;
age = "25";

// type 'union'
let magicNumber: number | string = 1000;
magicNumber = "1000";

// arrays type
const users = ["Alfrendo", "Stenley", "Silalahi"];
// users.push(10);

// advanced arrays type
let hobbies: (string | number)[];
hobbies = ["test", -1];

// alternative for advanced arrays type
// using generic type
let languages: Array<string | number>;
languages = ["IND", -1];

// type 'tuples'
let possibleResults: [number, number];

possibleResults = [1, 2];
// possibleResults = [1, 2, 3];
