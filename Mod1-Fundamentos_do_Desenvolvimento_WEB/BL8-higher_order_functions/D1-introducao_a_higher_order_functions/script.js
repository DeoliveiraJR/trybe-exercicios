/* const repeat = (number, action) => {
    for (let count = 0; count <= number; count += 1) {
      action(count);
    }
  };
  
  repeat(3, (number) => {
    if (number % 2 === 0) {
      console.log(number, 'is even');
    }
  });

  const numberGenerator = () => {
    return Math.random() * 100;
  }
  
  console.log(numberGenerator());

const wakeUp = () => `Acordando!`;

const coffee = () => `Bora tomar café!`;

const sleeping = () => `Partiu, dormir!`;

const doingThings = (callback) => {
  return console.log(callback())
}

doingThings(wakeUp);
 */

// EXERCICIO 1 :

//função que vai returnar o objeto que adicionaremos:
const getEmail = (fullname) => {
  const email = `${fullname.split(' ').join('_').toLowerCase()}@betrybe.com` // Split: retorna um array de palavras | join: concatena o array com o caractere "_" | toLowerCase: torna todos caracteres minusculos; 
  return {fullname, email: email};
}

// função newEmployees recebe a função getEmail como parametro e retorna um objeto:
const newEmployees = (callback) => { //callback só será definido na chamada da função, onde chamaremos a getEmail;
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva')
  }
  return employees;
};

console.log(newEmployees(getEmail));

//EXERCICIO 2:

//HOF que retorna o resultado de um sorteio:
//1- Esta HOF irá gerar um número aleatório entre 1 e 5;
const confereNumero = (numAposta, callback) => {
  //Variavel que armazena o resultado do sorteio:
  numeroAleatório = Math.floor(Math.random() * (5 - 0)) + 1; //MathFloor: transforma em inteiro o resultado do Random

  console.log(`Sort: ${numeroAleatório}`);
  console.log(`numero aposta: ${numAposta}`);

  //Laço com o call utiliza a callbacks de
  if (callback(numeroAleatório, numAposta) === true) {
    return `Deeeeu Green`
  } else {
    return `Deeeeu Bad`
  } 
 
}

//console.log(confereNumero(2))


//2. recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado.

const check = (valor1, valor2) => valor1 === valor2;

//O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou".

console.log(confereNumero(1,check))

