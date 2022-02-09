//1.
let acumulado =10;


for (let i = 10; i !== 0; i -= 1) {
    acumulado  = acumulado * (i-1);
    console.log("Lista fatorial: " + acumulado)
}

let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log("fatorial total: " + fatorial);

//2.