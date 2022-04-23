// Exercicio 3 - Crie um novo projeto utilizando npx create-react-app :
// Na pasta src, crie um novo arquivo chamado Content.jsx , que representará o componente Content;
import React from 'react';

// Ainda no arquivo Content.jsx , adicione o seguinte array:
const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

// A classe Content deve renderizar o array conteudos com a utilização da função map, como visto anteriormente, com o seguinte formato:
/* 
O conteúdo é: `Nome do Conteúdo`
Status: `Status do Conteúdo`
Bloco: `Bloco do Conteúdo`
 */

// 

// Dentro do arquivo Content.jsx , crie uma classe React chamada Content ;
class Content extends React.Component {
    render() {
       return ( <div>
                 {conteudos.map(elem => ( // chaves para quando formos usar um código // map itera sobre o elemento e retorna abaixo sem alterar tamanho do array:
                    // Lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização.
                    <div key={elem.conteudo} className="card">
                    <h4>{`O conteudo é: ${elem.conteudo}`}</h4>
                    <p>{`status: ${elem.status}`}</p>
                    <p>{`bloco: ${elem.bloco}`}</p>
                    </div>
                 ))}
        </div> 
        );
    }
}

// Exporte o componente Content ;
export default Content;