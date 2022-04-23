// #8.3 - filter:

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

// #8.3 EXERCICIOS:
// Para os exercícios propostos use o seguinte template:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
// Dica: Use a função map

/* function formatedBookNames() {
  return books.map((book) => `Livro: ${book.name} - Genero do livro: ${book.genre} - Author: ${book.author.name}`)
}

console.log(formatedBookNames()) */

/* 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora
do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa 
mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

Dica: use as funções map , sort */

/* function nameAndAge() {
  return books.map((book) => (
    {
      author: book.author.name,
      age: book.releaseYear - book.author.birthYear,
    }
  )).sort((a,b) => a.age - b.age)
}

console.log(nameAndAge()) */

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia..
// Dica: use a função filter:

/* function fantasyOrScienceFiction() { 
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia') 
}

console.log(fantasyOrScienceFiction()) */