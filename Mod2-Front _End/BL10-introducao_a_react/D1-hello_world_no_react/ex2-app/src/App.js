import React from 'react';
import './App.css';
import Header from './Header'; // Exercicio 3 => No arquivo App.js , importe o componente Header criado anteriormente;
import Content from './Content'; // No arquivo App.js , importe o componente Content criado anteriormente;
import Footer from './Footer'; // Importe o componente Footer no app.js

/* 
// usando função
function App() {
  return (
  <Header />
  ); 
}
*/


class App extends React.Component {

// Renderize o componente Header no App.js ;
// Renderize o componente Content no App.js ;
// Renderize o componente Footer no app.js .
  render() {
    return (
      <div>
        <Header /> 
        <Content />
        <Footer />
       </div>
    );
  }
} 


export default App;
