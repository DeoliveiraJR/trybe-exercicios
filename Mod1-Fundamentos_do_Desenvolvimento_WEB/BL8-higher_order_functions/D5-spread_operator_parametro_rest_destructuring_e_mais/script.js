// #8.5 - Spread Operator:

// Exemplo 1: concatentando varios arrays e armazenando em um novo array em uma variavel:

/* const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months); */

// Exemplo 2: utliziando o spread como argumento de uma função:

/* const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

console.log(Math.max(...randomNumbers));
console.log(Math.min(...randomNumbers)); */

// #PARA FIXAR:
/* 1. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única
contendo todos os itens da nossa salada de frutas usando o spread . */

/* const specialFruit = ['cajá', 'maça', 'uva'];

const additionalItens = ['goiaba', 'pera', 'cajamanga'];

const fruitSalad = (fruit, additional) => {
  newList = [...fruit, ...additional];
  return newList
};

console.log(fruitSalad(specialFruit, additionalItens)); */

//#8.5 -Parâmetro rest :

// Exemplo 1 - usando o rest para passar parametros ilimitados para uma função:

/* function quantosParams(...args) {
  console.log('parâmetros:', args);
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(0, 1, 2));
console.log(quantosParams('string', null, [1, 2, 3], { })); */

// Exemplo 2 - No exemplo acima, a função sum calcula a soma de todos os argumentos passados a ela - independente do número:

/* const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); */

//#8.5 -Object Destructuring :

// Exemplo 1 - Desestruturando um objeto dentro de outro objeto: 

// definindo o objeto
/* const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

// desestruturando o objeto:
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`); */

// Exemplo 2 - Podemos também usar a desestruturação de objetos em conjunto com o spread operator, veja abaixo:: 

/* const daysOfWeek = {
  workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays);
console.log(weekend);

const weekdays = [...workDays, ...weekend];
console.log(weekdays); */

// PARA FIXAR :

/* 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na
 empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize
 o spread operator. */

/* const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const {name, age, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;

const arrayUser = [name, age, nationality];
const arrayJobInfos = [profession, squad, squadInitials];
const newArrray = [...arrayUser, ...arrayJobInfos];
const newObject = {
  ...user,
  ...jobInfos,
}

console.log(newArrray);
console.log(newObject); */

/* 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a 
desestruturação de objetos em conjunto com template literals .

Exemplo : "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic" */


//console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)

// 3 - utilize o array destructuring para recolher a função e a saudação:

/* const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [saudacao, realizaSaudacao] = saudacoes;

console.log (realizaSaudacao(saudacao)); */

// 4 - Através da desestruturação de arrays, corrija os valores das variáveis.

/* let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida ] = [bebida, comida, animal];

console.log(comida, animal, bebida); */
