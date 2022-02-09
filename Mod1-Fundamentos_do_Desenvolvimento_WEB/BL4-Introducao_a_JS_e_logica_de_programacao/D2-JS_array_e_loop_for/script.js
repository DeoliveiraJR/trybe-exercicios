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
} else {
    maiorNum = maiorNum
}
    
}

console.log("Maior valor da lista = " + maiorNum)

//6.
let contNumImpares = 0;
for( let i = 0; i < numbers.length; i += 1 ) {  
if( numbers[i] % 2 > 0) {
    contNumImpares = contNumImpares += 1;
} else {
    contNumImpares = contNumImpares += 0;
}
    
}

console.log("Quantidade de numeros impares = " + contNumImpares)

//7.
let menorNum = maiorNum;
for( let i = 0; i < numbers.length; i += 1 ) {  
if( numbers[i] < menorNum) {
    menorNum = numbers[i]
} else {
    menorNum = menorNum
}

}

console.log("o menor valor da lista = " + menorNum)

//8.
let arrayList = []

for( let i = 0; i < 25; i += 1) {
    arrayList.push(i + 1)
    console.log(arrayList[i])
}

//9.
let listaDivisao = []

for (let i = 0; i < arrayList.length; i += 1 ) {
    listaDivisao.push(arrayList[i] / 2)
    console.log(listaDivisao[i])
}