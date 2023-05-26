// you can write js here

console.log('exo-5');

// Etape 1

let input = "T'as les cramptes ? Apagnan ! Quoicoubeh !";
input = input.toLowerCase();
console.log(input);

//Etape 2

const vowels = ["a", "e", "i", "o","u","y"];

// Etape 3

let resultArray = [];

// Etape 4 5 6 7 8 9

for (i = 0; i < input.length; i++) {
//console.log(input[i]);
console.log(vowels.indexOf(input[i]));
}

for (let char of input) {
    for (i = 0; i < vowels.length; i++) {
        if (char === vowels[i]) {
            console.log(char);
            resultArray.push(char);
        }
    }
}

console.log(resultArray.join(" ").toUpperCase());




