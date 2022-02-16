/*document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = 'blue'

texto1 = document.querySelector('#primeiroFilhoDoFilho');
texto1.innerText = "3) Exercicio de fixacao - req 3";

4)document.querySelector('#pai').firstElementChild;

5)document.querySelector('#elementoOndeVoceEsta').previousElementSibling;

6)document.querySelector('#elementoOndeVoceEsta').nextSibling;

7)document.querySelector('#elementoOndeVoceEsta').nextElementSibling

8)document.querySelector('#pai').lastChild.previousElementSibling*/

/*function task1() {

let var1 = document.querySelector('#pai');
let var2 = document.createElement('section');
var2.innerText = "deu certo";
return var1.appendChild(var2);
}

task1();

function task2() {

    let var3 = document.querySelector('#elementoOndeVoceEsta');
    let var4 = document.createElement('section');
    var4.innerText = "deu certo de novo";
    return var3.appendChild(var4);
}
    
task2();

function task3() {

    let var5 = document.querySelector('#primeiroFilhoDoFilho');
    let var6 = document.createElement('section');
    var6.innerText = "E de novo, e de novo";
    return var5.appendChild(var6);
}
    
task3();*/

function q1() {

    let var1 = document.querySelector('body');
    let var2 = document.createElement('h1');
    var2.innerText = "Exercício 5.2 - JavaScript DOM";
    return var1.appendChild(var2);
    }
    
    q1();

function q2() {

    let var1 = document.querySelector('body');
    let var2 = document.createElement('main');
        var2.className = 'main-content'
    return var1.appendChild(var2);
    }
    
    q2();

function q3() {

    let var1 = document.querySelector('main');
    let var2 = document.createElement('section');
        var2.className = 'center-content'
    return var1.appendChild(var2);
    }
        
    q3();

function q4() {

    let var1 = document.querySelector('.center-content');
    let var2 = document.createElement('p');
        var2.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius asperiores, sunt nam et dolorem suscipit sit quos pariatur laboriosam nulla nihil adipisci fugiat voluptates. Dicta aliquid unde quisquam est ea.
        Deserunt delectus eligendi autem blanditiis facilis reprehenderit explicabo hic alias, expedita quis veniam voluptatibus corporis ad sit ut nesciunt cum omnis voluptatum eaque perspiciatis dignissimos doloremque saepe nam! Quo, sequi.
        Ipsa, quae. Rem deserunt atque at nostrum non, commodi voluptatem ab, aliquid cum iusto voluptate assumenda odio. Minus dolorem sapiente iure quas fuga, est perferendis. Nesciunt mollitia cumque consequatur ipsam?"`
    
    return var1.appendChild(var2);
    }
                
    q4();

function q5() {

    let var1 = document.querySelector('.main-content');
    let var2 = document.createElement('section');
        var2.className = 'left-content'
    return var1.appendChild(var2);
    }
            
    q5();

function q6() {

    let var1 = document.querySelector('.main-content');
    let var2 = document.createElement('section');
        var2.className = 'right-content'
    return var1.appendChild(var2);
    }
                
    q6();

function q7() {

    let var1 = document.querySelector('.left-content');
    let var2 = document.createElement('img');
        var2.className = 'small-image';
        var2.src = "https://picsum.photos/200";
    return var1.appendChild(var2);
    }

    q7();

 let q8 = () => {

    let var1 = document.querySelector('.right-content');
    

    let lista = [
        'Um',
        'Dois',
        'Tres',
        'Quatro',
        'Cinco',
        'Seis',
        'Sete',
        'Oito',
        'Nove',
        'Dez'
    ];
    
    for(let i in lista) {
        var3 = lista[i]

        let var2 = document.createElement('ul');
        var2.innerText = var3;
        var1.appendChild(var2);

    }

    return;
}

    q8();

function q9() {

    let var1 = document.querySelector('.main-content');
    
    for(let i = 0; i < 3; i += 1){
    let var2 = document.createElement('h3');
        var2.innerText = `Elemento h3 - ${i}`
        var1.appendChild(var2);
    }

    return;
}

q9();

function q10() {
    let var1 = document.querySelector('h1');
    var1.className =  "title";

    return;

}

q10();

function q11() {
    let var1 = document.querySelectorAll('h3');
    
    for(let i in var1) {
       
    var1[i].className =  "descripition";

    }
    
    return;

}

q11();

const q12 = () => {

const elementDeleted = document.getElementsByClassName('left-content')[0];
const elementNode = elementDeleted.parentNode;
elementNode.removeChild(elementDeleted);
}

q12();


const q13 = () => {

    const elementRight = document.getElementsByClassName('right-content')[0];
    elementRight.style.marginRight='auto';
}
    q13();

const q14 = () => {
    const elementCenter = document.getElementsByClassName('center-content')[0];
    const elNodeParent = elementCenter.parentNode
    elNodeParent.style.backgroundColor = 'green';
}
    q14();

    ul.lastChild.remove();
    ul.lastChild.remove();