//1.
let a = 2;
let b = 7;

//adicao
let adicao = (a+b);
console.log(adicao);

//subtracao
let subtracao = (a-b);
console.log(subtracao);

//multiplicacao
let mult = (a*b);
console.log(mult);

//divisao
let div = (a/b);
console.log(div);

//modulo
let mod = (a%b);
console.log(mod);

//2.

const c = 2;
const d = 7;

if(a>b){
    console.log("variavel a :", a)
} else if(b>a) {
    console.log("variavel b :", b) 
} else {
    console.log("numeros sao equivalentes")
}

//3.

const num1 = 2;
const num2 = 7;
const num3 = 10;

if(num1 > num1 && num1 > num3){
    console.log("numero maior =",num1)
} else if (num2 > num1 && num2 > num3){
    console.log("numero maior =",num2)
} else if (num3 > num1 && num3 > num2){
    console.log("numero maior =",num3)
} else {
    console.log("existem numeros que se equivalem")
}

//4.
const num_A = 2;

if(num_A > 0) {
    console.log("positive")
} else if(num_A < 0) {
    console.log("negative")
} else if(num_A == 0) {
    console.log("Zero")
}

//5.
const ang_1 = 60;
const ang_2 = 60;
const ang_3 = 60;


if(ang_1 < 0 || ang_2 < 0|| ang_3 < 0) {
    console.log("Error!!! angulo invalido")
} else if(ang_1 + ang_2 + ang_3 == 180) {
    console.log(true)
}   else {
    console.log(false)
}

//6.
let nome_peca = "bispo";
let nome_ajust = nome_peca.toLowerCase();

if(nome_ajust == "rei") {
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal somente uma casa de cada vez.")
} else if(nome_ajust == "rainha") {
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.")
} else if (nome_ajust == "bispo") {
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.")
} else if(nome_ajust == "cavalo") {
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.")
} else if (nome_ajust == "torre") {
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.")
} else if (nome_ajust == "peao") {
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.")
} else {
    console.log("peça não faz parte do jogo")
}

//7.
let nota = 90;

if(nota < 0 || nota > 100){
    console.log("digite uma nota valida!!")
} else if(nota >= 90){
    console.log("Parabens voce tirou um A")
} else if(nota >= 80){
    console.log("Voce tirou um B")
} else if(nota >= 70){
    console.log("Voce tirou um C")
} else if(nota >= 60){
    console.log("Voce tirou um D")
} else if(nota >= 50){
    console.log("Voce tirou um E")
} else if(nota < 50){
    console.log("Voce tirou um F")
}

//8.
const numA = 2;
const numB = 7;
const numC = 3;

if(numA % 2 == 0 || numB % 2 == 0 || numC % 2 == 0) {
    console.log(true)
} else {
    console.log(false)
}

//9.
if(numA % 2 > 0 || numB % 2 > 0 || numC % 2 > 0) {
    console.log(true)
} else {
    console.log(false)
}

//10.
const custo = -15;
const valor = 75;
let imposto = custo * 0.2;
let lucro = valor - custo - imposto;
let qtnde = 1000;

if(custo < 0 || valor < 0 || imposto < 0 || lucro < 0 || qtnde <0) {
    console.log("erro: insira um valor válido")
} else {
    console.log(lucro * qtnde)
}

//11.
let salarioBruto = 3000;
let aliqInss;
let aliqIr;

if(salarioBruto <= 1556.94) {
    aliqInss = salarioBruto * 0.08;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliqInss = salarioBruto * 0.09;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliqInss = salarioBruto * 0.11;
} else if (salarioBruto >= 5189.83) {
    aliqInss = 570.88;
}

const salarioBase = salarioBruto - aliqInss; 

if(salarioBruto <= 1903.98) {
    aliqIr = 0;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliqIr = (salarioBase * 0.075)-142.80;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliqIr = (salarioBase * 0.15)-354.80;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliqIr = (salarioBase * 0.225)-636.13;
} else if (salarioBase >= 4664.69) {
    aliqIr = (salarioBase * 0.275)-869.36;
}

let salarioLiquido = (salarioBase - aliqIr);
console.log("Salario liquido : R$ " + salarioLiquido);
