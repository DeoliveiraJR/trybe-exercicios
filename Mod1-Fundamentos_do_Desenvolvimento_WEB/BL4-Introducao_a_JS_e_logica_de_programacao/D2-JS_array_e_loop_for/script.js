//1.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i])
}

//2.
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) {
    sum += numbers[i];
}

console.log("resultado = " + sum);

//3.
let média = sum / numbers.length;
console.log("média =" + média);

//4.
if(média > 20) {
    console.log("valor maior que 20!!!")
} else {
    console.log("valor menor ou igual a 20")
}

//5.

let maiorNum = 0;
for( let i = 0; i < numbers.length; i += 1 ) {  
if( numbers[i] > maiorNum) {
    maiorNum = numbers[i]
}

}

console.log("Maior valor da lista = " + maiorNum)

//6.
let contNumImpares = 0;
for( let i = 0; i < numbers.length; i += 1 ) {  
if( numbers[i] % 2 > 0) {
    contNumImpares = contNumImpares += 1;
}
}

if (contNumImpares == 0) {
    console.log("mehum valor impar encontrado");
} else {
    console.log("Quantidade de numeros impares = " + contNumImpares)

}

//7.
let menorNum = maiorNum;
for( let i = 0; i < numbers.length; i += 1 ) {  
if( numbers[i] < menorNum) {
    menorNum = numbers[i]
} 

}

console.log("o menor valor da lista = " + menorNum)

//8.
let arrayList = []

for( let i = 0; i < 25; i += 1) {
    arrayList.push(i + 1)
}
    console.log(arrayList);


//9.
let listaDivisao = []

for (let i = 0; i < arrayList.length; i += 1 ) {
    listaDivisao.push(arrayList[i] / 2)
}
    console.log(listaDivisao);


//Bonus-1
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;    }
    }
  }

  console.log("ordem crescente: " + array)

//Bonus-2
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] > array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;    }
    }
  }

  console.log("ordem decrescente: " + array)

  //Bonus-3
  let array2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
  let newArray = []
  
  for(i = 0; i < array2.length; i += 1) {
  if( i + 1 < array2.length) {
     newArray.push(array2[i] * array2[i+1])
  } else { 
      newArray.push(array2[i] * 2)
  }
  
}
  console.log("New array: " + newArray);