//1.
let acumulado =10;


for (let i = 10; i !== 0; i -= 1) {
    acumulado  = acumulado * (i-1);
    console.log("Lista fatorial: " + acumulado)
}

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log("fatorial total: " + fatorial);

//2.
let word = 'angra';
let wordInvert = '';

for (let index = 0; index < word.length; index += 1) {
    wordInvert += word[word.length-1-index];
}

console.log(wordInvert)

//3.
let arrayText = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = arrayText[0];

for (let i = 0; i < arrayText.length-1; i += 1 ) {
    if(arrayText[i].length > biggestWord.length) {
        biggestWord = arrayText[i]
    }
}
console.log("A maior palavra da lista: " + biggestWord)
console.log("total de letras: " + biggestWord.length)

//4.
let smallestWord = arrayText[0]

for (let i = 0; i < arrayText.length-1; i += 1 ) {
    if(arrayText[i].length < biggestWord.length) {
        biggestWord = arrayText[i]
    }
}
console.log("A menor palavra da lista: " + smallestWord)
console.log("total de letras: " + smallestWord.length)

//5.

maiorNumeroPrimo = 0;

for(let numerador = 1; numerador <= 50; numerador += 1) {
    ehprimo = true;
    for(let divisor = 2; divisor < numerador; divisor += 1) {
        if(numerador % divisor === 0) { 
            ehprimo = false;
        }
    }   
    
    if (ehprimo) {
        maiorNumeroPrimo = numerador;
    }
}

console.log("Maior numero primo: " + maiorNumeroPrimo)