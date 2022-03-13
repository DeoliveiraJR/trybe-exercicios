// Parte I
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => array.sort((a,b) => a - b);

console.log(`Os números ${sortArray(oddsAndEvens)} se encontram ordenados de forma crescente!`);

// Parte II - Exercicio 1
const { sign } = require("crypto");

// Forma não recursiva: 
function fatorial(n) {
  if (n == 0) {
      return 1;
  }
  let resp = n;
  while (n > 2) {
      resp *= --n;
  }
  return resp;
}

// Recursiva com 1 unica linha, solução gabarito:
// const fatorial = (n) => n > 1 ? n * fatorial(n-1) : 1;

console.log(fatorial(5))

// Parte II - Exercicio 2
const maiorPalavra = frase => {
  let arrayWord = frase.split(' ');
  let tamanhoPalavra = 0;
  let palavraMaior = '';

  for (const palavra of arrayWord) {
    if (palavra.length > tamanhoPalavra) {
      tamanhoPalavra = palavra.length;
      palavraMaior = palavra;
    }
  }
  return palavraMaior;
}

console.log(maiorPalavra('Antônio foi no banheiro e não sabemos o que aconteceu'))

// Parte II - Exercicio 3
const btn = document.querySelector('#btn')
const counter = document.querySelector('label')
let count = 0;

const countClick = () => {
  count = count + 1;
  counter.innerHTML = `CountClicks : ${count}`
}

btn.addEventListener('click', countClick);

// Parte II - Exercicio 3 e 4

/* let input = 'Jr';
let arrayList = ['JS', 'Python', 'PhP', 'CSS', 'Lua'];

const retornaString = (input) => {
  let msg = `Tryber ${input} aqui`;
  return msg;
}

const function2 = (retornaString) => console.log(retornaString);
 */
const array = ["Android", "iOS", "Architecture", "Teach", "Run"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

    return result;
}

console.log(buildSkillsPhrase("Lucas"));