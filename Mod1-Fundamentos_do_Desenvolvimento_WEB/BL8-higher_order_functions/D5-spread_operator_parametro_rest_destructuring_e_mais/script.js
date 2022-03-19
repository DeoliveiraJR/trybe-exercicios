// #8.5 - Spread operator, parametro rest, destructuring e mais:

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


