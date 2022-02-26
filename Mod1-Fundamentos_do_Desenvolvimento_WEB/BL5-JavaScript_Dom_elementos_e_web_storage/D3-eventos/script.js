/*exercicio fixacao:

const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

let elItemList = document.getElementsByTagName('li');
let elLista = document.querySelector('.container');

function addClass(e) {
 for(let i = 0; i < elItemList.length; i++){
 elItemList[i].classList.remove('tech')};    
 e.target.classList.add('tech');
    return;
};

elLista.addEventListener('click', addClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function addTextInput() {
  const elTech = document.querySelector('.tech');
  elTech.innerHTML = input.value;
}

input.addEventListener('keyup', addTextInput);

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?

function replace(){
  window.location.replace('https://deoliveirajr.github.io/');
}

myWebpage.addEventListener('dblclick', replace);

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

function changeColor(){
  myWebpage.style.backgroundColor = "green";
}

function defaultColor(){
  myWebpage.style.backgroundColor = "unset";
}


myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', defaultColor);


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.*/

function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Exercicio 1 -

function inputDays() {
  let elLista = document.querySelector('#days')
  for(let i = 0; i < dezDaysList.length; i += 1) {
    let dayItem = dezDaysList[i];
    let elItemList = document.createElement('li');
    if(dayItem === 24 || dayItem === 31) {
      elItemList.classList.add('day', 'holiday');
      elItemList.innerHTML = dayItem;
      elLista.appendChild(elItemList);
    } else if (dayItem === 4 || dayItem === 11 || dayItem === 18) {
        elItemList.classList.add('day', 'friday');
        elItemList.innerHTML = dayItem;
        elLista.appendChild(elItemList);
    } else if (dayItem === 25) {
        elItemList.classList.add('day', 'holiday', 'friday');
        elItemList.innerHTML = dayItem;
        elLista.appendChild(elItemList);
    } else {
        elItemList.classList.add('day');
        elItemList.innerHTML = dayItem;
        elLista.appendChild(elItemList);
    }  
      
  }

}

inputDays();

// Exercicio 2 -

const elButton = document.querySelector('.buttons-container')

function addButton(feriados) {
  let button = document.createElement('button');
  button.innerHTML = "Feriados" 
  button.id = 'btn-holiday';
  elButton.appendChild(button);
}

addButton('feriados');

// Exercicio 3 -

let buttonHoliday = document.getElementById('btn-holiday')
let holidays = document.querySelectorAll('.holiday');
  
function paintHolidays() {
  for(let i = 0; i < holidays.length; i += 1) {
  holidays[i].style.backgroundColor = "gray";
  holidays[i].style.color = 'White';
  }
}

buttonHoliday.addEventListener('click', paintHolidays);

// Exercicio 4 -

function addButton2(friday) {
  let btnFriday = document.createElement('button');
  btnFriday.innerHTML = "Sexta-Feira" 
  btnFriday.id = 'btn-friday';
  elButton.appendChild(btnFriday);
}

addButton2('friday');

// Exercicio 5 -

let buttonFriday = document.getElementById('btn-friday')
let elFriday = document.querySelectorAll('.friday');
let arrayFriday = [4, 11, 18, 25];

function changeTextFriday() {
  for(let i = 0; i < elFriday.length; i += 1) {
    if(elFriday[i].innerHTML !== 'Friday') {
       elFriday[i].innerHTML = 'Friday';
    } else  {
       elFriday[i].innerHTML = arrayFriday[i];
    }
  } 
}

buttonFriday.addEventListener('click', changeTextFriday);

// Exercicio 6 -

/*const elContainerDias = document.querySelector('#days');

function zoomIn(e) {
  e.currentTarget.style.fontSize = '30px';
  e.currentTarget.style.fontWeight = '600px';
}

function zoomOut(e) {
  e.currentTarget.style.fontSize = '20px';
  e.currentTarget.style.fontWeight = '200';
}

elContainerDias.addEventListener('mouseover', zoomIn);
elContainerDias.addEventListener('mouseout', zoomOut);
*/
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();

// Exercicio 7 -

function createTask(task) {
  const mytasks = document.querySelector('.my-tasks');
  const taskSpan = document.createElement('span');
  taskSpan.innerHTML = task;
  taskSpan.classList.add('task');
  mytasks.appendChild(taskSpan)
}

createTask('cozinhar');

// Exercicio 8 -

let colorSelected = 'green'

function addLegendColor(cor) {
let divCreated  = document.createElement('div');
divCreated.classList.add('task');
divCreated.style.backgroundColor = cor;

let mytasks = document.querySelector('.my-tasks');
mytasks.appendChild(divCreated);

}

addLegendColor(colorSelected);

// Exercicio 9 -

let divTask = document.querySelector('.task');
  
function taskSelected() {
  divTask.classList.toggle('selected')
}

divTask.addEventListener('click', taskSelected);

// Exercicio 10 -

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();

// Bonus

let ulCompromissos = document.querySelector('.task-list');
let buttonAdd = document.querySelector('#btn-add')


function addListaCompromisso() {
let elListCompromissos = document.createElement('li');
let taskInput = document.querySelector('#task-input').value;

elListCompromissos.innerHTML = taskInput;
ulCompromissos.appendChild(elListCompromissos);
}

buttonAdd.addEventListener('click', addListaCompromisso);

