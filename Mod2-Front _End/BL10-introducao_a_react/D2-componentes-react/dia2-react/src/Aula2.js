// =====-----REACT #Dia-2-Componentes React-----=====
// Analisando o código abaixo, temos:
import React from 'react';

// 1. A declaração de um componente chamado Greeting .
/*
class Greeting extends React.Component { // 2. O componente Greeting herda da classe Component da biblioteca react .
// 3. O componente Greeting descreve o que vai ser mostrado para quem usar a aplicação , declarado no método obrigatório render . Nesse caso, Greeting retorna: <h1>Hello, {this.props.name}</h1> .
    render() {

        // 4. O componente Greeting possui como propriedade um objeto chamado props , que contém todos os dados passados como parâmetro na hora de chamar um componente. Ou seja, chamar <Greeting name="Samuel" /> faz com que o componente tenha uma prop igual a { name: "Samuel" } .
        return <h1>Hello, {this.props.name}</h1>;
  }
}

// 5. Exportamos o componente Greeting de forma que ele possa ser reutilizado na aplicação.
export default Greeting;
*/

// =====-----PROPS-----======
// Exemplo: Componente que retorna nome e sobrenome definidos nas props 'name' e  'lastName':
/* 
class GreetingExample extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} {this.props.lastName}</h1>;
  }
}

export default GreetingExample;
 */
// verificar como chamamos no App.js


// =====-----COMPOSIÇÃO DE COMPONENTES-----=====

// COMPOSIÇÃO = São elementos ordenados de forma a constituir algo maior e mais complexo. São, por exemplo, as músicas em um álbum musical, as frutas em uma salada de frutas ou até mesmo os inputs , as labels e os buttons em um form .

// EXEMPLO - Vamos refatorar o código abaixo para poder entender, na prática, sobre composição de componentes e seus benefícios. O código a seguir renderiza informações básicas sobre dois albuns do Coldplay:

//  !!! WRONG WAY !!!
/* class App extends React.Component {
  render() {
    // Declaração do objeto contendo informações do album01
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    // Declaração do objeto contendo informações do album02
    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    // Retorno do que será renderizado
    return (
      <article>
        <section>
          <img src={ album01.image } alt={ album01.title } />
          <h2>{ album01.title }</h2>
          <p>Lançamento: { album01.releaseDate.year }</p>
          <p>Gravadora: { album01.others.recordCompany }</p>
          <p>Formatos: { album01.others.formats }</p>
        </section>
        <section>
          <img src={ album02.image } alt={ album02.title } />
          <h2>{ album02.title }</h2>
          <p>Lançamento: { album02.releaseDate.year }</p>
          <p>Gravadora: { album02.others.recordCompany }</p>
          <p>Formatos: { album02.others.formats }</p>
        </section>
      </article>
    );
  }
}

export default App; */


// Percebe-se que, nesse contexto, a section é uma excelente candidata a ser transformada em um componente reutilizável , dando início à nossa refatoração. 

// !!! CORRECT WAY !!!
class Album extends React.Component {
  render() {
    return (

        // Tornando a Section iterante:
      <section>
        <img src={ this.props.album.image } alt={ this.props.album.title } />
        <h2>{ this.props.album.title }</h2>
        <p>{ this.props.album.releaseDate.year }</p>
        <p>
          Lançamento:
          { `${ this.props.album.releaseDate.day }/${ this.props.album.releaseDate.month }/${ this.props.album.releaseDate.year }` }
        </p>
        <p>Gravadora: { this.props.album.others.recordCompany }</p>
        <p>Formatos: { this.props.album.others.formats }</p>
      </section>
    );
  }
}

export default Album;

// verificar como chamar no App.js