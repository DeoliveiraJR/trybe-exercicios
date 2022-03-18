//#8.3 - forEach:

//Exemplo: retorna um novo array com os numeros pares do array numbers:

/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.filter(verifyEven);

console.log(isEven); */

// Outra forma de ser realizada sem a necessidade de criar uma nova função.

/* const isEven2 = numbers.filter((number) => number % 2 === 0);

console.log(isEven2);
 */

//Exemplo: Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array:

/* const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
listStudents.filter((student) => student !== name);

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); */

//#8.3 - map:

/* Exemplo 1: retorna um novo array concatenando as propiedades firstName e lastName de cada objeto dentro do array persons e armazena o
resultado dentro variavel fullName: */

/* const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
  ];
  
  const fullNames = persons.map((array) => `${array.firstName} ${array.lastName}`);
  
  console.log(fullNames) */

// Exemplo 2: transformar todos os números em negativos e passa-lós para um array novo:

/* const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); 
console.log(numbers); */

