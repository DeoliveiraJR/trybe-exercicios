const paragraph = document.getElementById("paragraph");
    paragraph.style.color = "red";

const titulo = document.getElementById("page-title");
    titulo.innerText = "Principios, Ray Dalio."     

document.getElementById('second-paragraph').innerText = "Segundo paragraph"

document.getElementById('subtitle').innerText = "subtitulo do livro"

let alteraText = document.getElementsByClassName('paragrafo');
for(let i in alteraText) {
alteraText[i].innerText = "Altera texto";
}

alteraText[0].style.color = 'green'

let newSubtitle = document.getElementsByTagName('h4');

for(let i in newSubtitle) {
newSubtitle[0].style.color = 'blue';
}