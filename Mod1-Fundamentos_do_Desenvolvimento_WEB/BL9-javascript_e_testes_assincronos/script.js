// #9.1 - Javascript assincrono e callbacks:

// Exemplo: conhecendo o setTimeout

/* setTimeout(() => {
  console.log('Comprar parafusos')
  console.log('Adicionar ao estoque')
}, 2000);

console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro'); */

// Exemplo 2 : função assíncrona, que espera alguns milissegundos para executar a função passada a ela como parâmetro. 
// No código abaixo, ela espera 3000 milissegundos
 
/* const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers); */

// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:

/* const pushNumber = (list, number) => list.push(number);

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), 3000); */

// #9.1 - Callbacks:
// Exemplo-1:

// 1. Array de objetos que representa os gastos de uma pessoa no mês:
/*const despesas = [
  {
    gym: 99,
  },
  {
    ifood: 200,
  },
  {
    phone: 60,
  },
  {
    internet: 100,
  },
];

const renda = 1000;

// 2 - Implementamos a função despesaMensal que recebe três parâmetros: nossas despesas, nossa renda e a função callback .
const despesaMensal = (renda, despesas, callback) => {

  //callback é uma funçaõ que soma as despesas com base no parametro despesas, que recebe o objeto de despesas do mês:
  const despesaTotal = callback(despesas);
  const saldoFinal = renda - despesaTotal;

  console.log(`Balanço do mês:
    Recebido: R$${renda},00
    Gasto: R$${despesaTotal},00
    Saldo: R$${saldoFinal},00 `);
};

// 3 - Realizamos a implementação da função callback representada por somaDespesas que recebe nossos gastos mensais e retorna um 
// valor de gastos total.

const somaDespesas = (despesas) => {
  const custoItem = despesas.map((item) => Object.values(item));
  const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
  return despesaTotal;
};

// 4 - Adicionamos somaDespesas na chamada da função despesaMensal e como resultado temos o balanço mensal.
despesaMensal(renda, despesas, somaDespesas);
 */

// Exemplo 2 - passando uma função como parametro:
// Definição da função userFullName
/* const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;

// Definição da função getUser
const getUser = (param) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  // Retornamos nosso parâmetro, que será uma função (callback)
  return param(userToReturn);
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
console.log(getUser(userFullName)); */
 