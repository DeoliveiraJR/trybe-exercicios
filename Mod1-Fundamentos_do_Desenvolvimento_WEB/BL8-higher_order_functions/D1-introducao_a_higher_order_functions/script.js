/* 
// #8.1 - High Order Functions:
// Estruturando uma HOF:

const repeat = (number, action) => {
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

// EXERCICIO 3:

/* 3. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de 
respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz 
a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") 
não altera-se a contagem. *//*

// Lista de Arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];


//HOF COM 3 parametros:

const resultado = (gabarito, answers, callback) => {

} 

// função que checa se as respostas estao corretas e faz a contagem da pontuação:

const checkGabarito = (resp, gab) => {
  let point = (resp === gab) ? 1 : 0;
  return point;
};

// função que retorna resultado final:

const scoreStudent = (gabarito, resposta, check) => {

  let score = 0;

  for(let i = 0; i < gabarito.length; i += 1) {
    const result = check(resposta[i], gabarito[i]);
    score = score + result;
  }

  return console.log(`pontuação final: ${score}`);

}

scoreStudent(RIGHT_ANSWERS, STUDENT_ANSWERS, checkGabarito);

// STUDENT_ANSWERS.forEach((element) => (element === RIGHT_ANSWERS.forEach((element) => element))? 1 : 0);

// BONUS:

/*PARTE I: Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano,
atualizam status, e ao final, retornam os resultados da rodada. Para os próximos exercícios copie o código abaixo: *//*

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 1,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
//O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

// funcão que executa o random damage para todos persons:
const getRandomDamage = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// step 1 - recuperando atributos do objeto dragon para recuperar a strength:
const {healthPoints, strength, damage} = dragon

// step-2 - executando o random Damage:
getDamageDragon = getRandomDamage(15, strength);
console.log(`Damage Dragon: ${getDamageDragon}`)

// 2 - Crie uma função que retorna o dano causado pelo warrior .
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

// step-1 - recuperando atributos do danobjeto warrior:
const {healthPoints: healthPointsWarrior, strength: strengthWarrior, weaponDmg, damage: damageWarrior} = warrior

// step-2 - executando random damage:
getDamageWarrior = getRandomDamage(strengthWarrior, (strengthWarrior * weaponDmg));
console.log(`Damage Warrior: ${getDamageWarrior}`)

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.

/* A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano 
recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. *//*

// gerando função que condiciona o mana do mago:
const getRandomDamageMage = (damage, mana) => {
  let turnStats = (mana < 15) ? {damage :'mana insuficiente, deu ruim', mana : 0,} : {damage : damage, mana : mana - 15,};
  return (turnStats);
}

// step-1 - recuperando atributos do objeto mage:
const {healthPoints: healthPointsMage, intelligence, mana, damage: damageMage} = mage

// step-2 - O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).

// executando o random damage
getDamageMage = getRandomDamage(intelligence, (intelligence * 2));
//console.log(`Damage Mage: ${getRandomDamageMage(getDamageMage, mana)}`)
console.log(`Mage : ${getRandomDamageMage(getDamageMage, mana)}`)


/* PARTE II : Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para 
outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois
neste caso, são funções que recebem como parâmetro outra função. */

//Copie o código abaixo e inicie sua implementação:

const gameActions = {
//  warriorAttack: (turnAttackWarrior),
};

/* 1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá
como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela
também deve atualizar o valor da chave damage do warrior. *//*

const turnAttackWarrior = (getDamageWarrior) => {
  warrior.damage = getDamageWarrior;
  dragon.healthPoints = dragon.healthPoints - getDamageWarrior; 
  console.log('attack warrior vs dragon:')
  console.log('== WARRIOR!!! ==')
  console.log(warrior);
  console.log('== DRAGON ==')
  console.log(dragon);
}

turnAttackWarrior(getDamageWarrior)

/* 2 - Crie a segunda HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem mage . Esta HOF receberá como
parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon . Além disto ela também 
deve atualizar o valor das chaves damage e mana do mage.*//*

  const turnAttackMage = (getDamage, getMana) => {
  mage.damage = damage;
  mage.mana = getMana;
  dragon.healthPoints = dragon.healthPoints - getDamageMage; 
  console.log('attack Mage vs dragon:')
  console.log('== MAGE!!! ==')
  console.log(mage);
  console.log('== DRAGON ==')
  console.log(dragon);
}

turnAttackMage(getRandomDamageMage.damage, getrandomDamageMage.mana) */