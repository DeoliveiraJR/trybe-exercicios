// import GreetingExample from "./Aula2"
import React from "react"
import Album from "./Aula2"

// =====-----EXEMPLO 1-----=====
/*
function App() {
  return (
    // encapsulamos o elemento dentro de um main ou div que é onde iremos posiciona-lo:
    // declaramos as props >>> name = '' lastNAme = ''; 
    <main>
      <GreetingExample name="Samuel" lastName="Silva" />
    </main>
  );
}

*/

// Ao atribuir as props name e lastName ao componente Greeting , o React automaticamente monta um objeto contendo as informações passadas e as disponibiliza para o componente montado numa variável chamada props , num formato parecido com esse:

// const props = { name: 'Samuel', lastName: 'Silva' }

// Esse objeto props , por sua vez, é passado para o componente Greeting , o qual poderá resgatar tanto o nome como o sobrenome através do this.props.name e this.props.lastName .

// =====-----EXEMPLO 2-----=====

class App extends React.Component {
  render() {

    // declaremos o objeto que iremos iterar:
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

    // retornamos e chamamos a classe aqui:
    return (
      // Aqui abaixo lançamos as props que chamarao ao objeto 'album' 
      <div>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </div>
    );
  }
}

export default App;
