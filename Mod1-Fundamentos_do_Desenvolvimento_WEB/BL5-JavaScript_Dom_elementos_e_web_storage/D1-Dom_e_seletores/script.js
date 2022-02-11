 /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
function alteraTexto() {
   document.getElementsByTagName("p")[0].innerText  = "pretendo estar me desenvolvendo enquanto DEV e atuando como full-stack developer";
  }
console.log(alteraTexto());

function alteracor() {
    document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,169)';
}
console.log(alteracor());

function alteraCor2() {
    document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
};
console.log(alteraCor2());

function corrigeTexto() {
    document.getElementsByClassName("title").innerText = "white";
};
console.log(alteraCor2());

function toUpperCase() {
    let element = document.getElementsByTagName('p')[0];
    element.innerHTML = element.innerHTML.toUpperCase();
}
console.log(toUpperCase());

function ShowParagraph() {
    for(i = 0; i < document.getElementsByTagName('p').length; i += 1) {
        console.log("Paragrafo " + i + document.getElementsByTagName('p')[i].innerText)    
    }
}
console.log(ShowParagraph());