//#8.2 - forEach:

//Exemplo que retorna uma função que converte todas as palavavras em maiusculas :

/* const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (array, index) => {
  names[index] = array.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names) */

//PARA FIXAR: 
//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails :

/* const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  }; */
  
  // Adicione seu código aqui
  
/*   emailListInData.forEach(showEmailList);
  console.log(emailListInData); */

//#8.2 - find:

//exemplo - retorna um elemento PAR dentro de um array e armazena em uma variável:
/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven);

console.log(verifyEven(9));
console.log(verifyEven(14));
 */
// Outra forma de ser realizada sem a necessidade de criar uma nova função.

/*const isEven2 = numbers.find((number) => number % 2 === 0);

console.log(isEven2); */

//PARA FIXAR: 
//1 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5 , caso ele exista :
/* const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);

console.log(findDivisibleBy3And5) */

//2 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

/* const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = names.find((word) => word.length === 5);

console.log(findNameWithFiveLetters); */

//3 - Utilize o find para encontrar a música com id igual a 31031685 , caso ela exista:

/* const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
  
  return musicas.find((array) => array.id === id);
  
  }

  console.log(findMusic('31031685')) */

//#8.2 - Some e Every:
//Exemplo(some) - testa se a primeira letra de cada string do array começa com uma letra passada: 
/* const listNames = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const verifyFirstLetter = (letter, names) => names.some((name) => name[0] === letter);

console.log(verifyFirstLetter('J', listNames)); // true
console.log(verifyFirstLetter('x', listNames)); // false */

//Exemplo(every) - testa se a condição aprovado é true em todos elementos do objeto:

/* const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = (studentGrades) => (
  Object.values(studentGrades).every((grade) => grade === 'Aprovado')
);

console.log(verifyGrades(grades)); */

//PARA FIXAR: 
// 1. Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false , use some ;

/* const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  result = arr.some((element) => element === name)
  return result;
}

console.log(hasName(names, 'JR')) */

/* 2. Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso
 contrário false , use every ; */

/*  const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((element) => element.age >= minimumAge);
}

console.log(verifyAges(people, 20)); */

//#8.2 - sort:
//Exemplo - ordenando stings:

/* const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food); */

//Exemplo - ordenando numeros(ordem crescente):

/* const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b);
console.log(points);  */

//PARA FIXAR: 
// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente:

/* const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

people.sort((a, b) => a.age - b.age);

console.log(people); */

// 2. Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente:

/* people.sort((a, b) => b.age - a.age);

console.log(people); */

// EXERCICIOS 8.2:

/* Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions , template literals ,
objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver
os exercícios!

Utilize seguinte código como template para realizar os exercícios: */

/* const books = [
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
]; */

// 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano  .

// usando o find:

/* const firstAuthor = books.find((books) => {
  return books.author.birthYear === 1947;
}).author.name

console.log(firstAuthor);
 */
//2 - Retorne o nome do livro de menor nome.
//Dica: use a função forEach .

/* const smallerName = () => {
  let nameBook;

  books.forEach((element) => {
    if (!nameBook || element.name.length < nameBook.length) {
     nameBook = element.name;
    };
  });
  return nameBook;
}

console.log(smallerName()); */

// 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

/* const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  return books.find((element) => element.name.length === 26);
}

console.log(getNamedBook()); */

// 4 - Ordene os livros por data de lançamento em ordem decrescente:

/* function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

console.log(booksOrderedByReleaseYearDesc()) */

// 5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário:

/* function everyoneWasBornOnSecXX() {
 return books.every((element) => element.author.birthYear > 1900 && element.author.birthYear < 2000)
}

console.log(everyoneWasBornOnSecXX()) */

// 6 - Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.

/* function someBookWasReleaseOnThe80s() {
  return books.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990);
}

console.log(someBookWasReleaseOnThe80s()) */

// 7 - Faça uma função que retorne true , caso nenhum author tenha nascido no mesmo ano, e false , caso contrário:

/* function authorUnique() {
  return books.every((book) =>
    !books.some((bookSome) => 
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
}

console.log(authorUnique()) */
