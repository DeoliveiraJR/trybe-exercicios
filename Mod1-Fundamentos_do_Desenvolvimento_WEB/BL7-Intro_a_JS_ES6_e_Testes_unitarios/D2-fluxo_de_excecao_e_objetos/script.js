/* let object = {}
let key = 'Nome'
const valueObj = 'Jr' 

  const addObject = (object, key, valueObj) => {
    object[key] = valueObj
    return console.log(object);  
}

addObject(object,key,valueObj) */
/* 
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2); */

// Parte I - Exercicios 1 e 2:
function sum() {
    try{
    //declara variaveis do escopo da função: 
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
  
      //atribui ação da função:
      if(value1 === '' || value2  === ''){
          throw Error
      } else if (isNaN(value1) || isNaN(value2)) {
        throw new Error('Informe apenas números para realizar a soma');
      } else {
          document.getElementById('result').innerHTML = `Resultado: ${result}`;
      }
    } catch(error) {
        console.error(error.message + 'Error: Você precisa enviar valores válidos');
    } finally {
        //zera valores depois de ação:
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}
  //atribui um escutador de evento ao botao assim que carrega a pagina:
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }

// Parte II - Exercicios 3 e 4:
const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let deliveryPerson = order(order)

    console.log(deliveryPerson)

  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  
  }
  
  orderModifier(order);
