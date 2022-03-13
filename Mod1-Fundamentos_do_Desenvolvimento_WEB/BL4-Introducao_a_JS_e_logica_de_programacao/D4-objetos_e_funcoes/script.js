//Fixacao-1
let player = {
    name: 'Marta',
    lastname: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
   
}

console.log("Ex.FIX-1 = A jogadora " + player["name"] + " " + player["lastname"] + " tem " + player["age"] + " anos de idade")

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log("A jogadora " + player.name + " " + player.lastname + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes." )

console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata")

//Parte 1
//1.
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
  };

  console.log("1) Seja bem-vinda " + info.personagem)
  
  
  //2.
  console.log("2) " + info.recorrente)

  //3.
  for(let chaves in info) {
      console.log("3) " + chaves)
  }

  //4.
  for(let chaves in info) {
    console.log("4) " + info[chaves])
  }

  //5.
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: "'O último MacPatinhas",
    recorrente: 'sim',
  };

  for(let indices in info) {
    if(indices == "recorrente" && info.recorrente == "sim" && info2.recorrente == "sim") {
      console.log("5) Ambos recorrentes")
  } else {
    console.log("5) " + info[indices] + " e " + info2[indices])
  }
}

//6.
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log("6) O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " é: " + leitor.livrosFavoritos[0].titulo)

  //7.
  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  })
  console.log("7) ")
  console.log(leitor.livrosFavoritos)

  //8)
  console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")

//Parte 2
//1)
function palindromo(word) {
    for( i = 0; i < palavra.length-1; i += 1) {
      newWOrd = word(word.length - (i))
    }
    return console.log(newWOrd)
  }
  
//2)

function arraylist(numbers) {
  let sum = 0;

  for(let i in numbers) {
    if(numbers[sum] < numbers[i]) {
      sum = i;
    }
  }

  return sum;
}

console.log("2) indice correspondente = " + arraylist([2, 3, 6, 7, 10, 1]))

//3.
function arraylist(numbers) {
  let sum = 0;

  for(let i in numbers) {
    if(numbers[sum] > numbers[i]) {
      sum = i;
    }
  }

  return sum;
}

console.log("3) indice correspondente = " + arraylist([2, 4, 6, 7, 10, 0, -3]))

//4.
function arraylist(names) {
  let maiorNome = names[0];
 
  /*console.log(maiorNome.length);
  console.log(names[4].length);
  console.log(names[4]);*/
  
    for(let i in names) {
    if(maiorNome.length < names[i].length) {
      maiorNome = names[i];
    }
    
  }
    return maiorNome;
}
    


console.log("4) Maior nome: " + arraylist(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5.
function arraylist(names) {
  let maiorNome = names[0];
 
  /*console.log(maiorNome.length);
  console.log(names[4].length);
  console.log(names[4]);*/
  
    for(let i in names) {
    if(maiorNome.length < names[i].length) {
      maiorNome = names[i];
    }
    
  }
    return maiorNome;
}
    

console.log("4) Maior nome: " + arraylist(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
