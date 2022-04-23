// =====-----Exercicio-----=====
// 1. Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app
// 2. Crie uma lista de tarefas simples seguindo os passos abaixo:
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

// array com lista de tarefas:
const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

// agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
class App extends React.Component {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul> // >>> sintaxe JSX com map que itera no array e adiciona a lista a ulm encapsulada
    );
  }
}

export default App;
