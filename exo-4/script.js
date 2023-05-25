// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.log(secretMessage);

//Etape 1 

let eraseLast = secretMessage.pop();
console.log("Etape 1 :", secretMessage);
console.log("Etape 1 :", eraseLast);

//Etape 2

let addWordsLast = secretMessage.push("to", "program");
console.log("Etape 2 :", secretMessage);

//Etape 3

secretMessage[6] = "right";
console.log("Etape 3 :", secretMessage); 

//Etape 4

let eraseFirst = secretMessage.shift();
console.log("Etape 4 :", secretMessage);
console.log("Etape 4 :", eraseFirst);

//Etape 5

let addWordFirst = secretMessage.unshift("Programming");
console.log("Etape 5 :", secretMessage);

//Etape 6

let deleteSeveralWords = secretMessage.splice(5, 5, "know");
console.log("Etape 6 :", secretMessage);
console.log("Etape 6 :", deleteSeveralWords);

// Etape 7

console.log("Etape 7 :", secretMessage.join());
console.log(secretMessage.join(" "));
console.log(secretMessage.join("-"));