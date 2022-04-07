// Exercicio 3 - Crie um novo projeto utilizando npx create-react-app :
// Na pasta src, crie um novo arquivo chamado Header.jsx , que representará o componente Header
import React from 'react';

// No arquivo Header.jsx , crie uma classe React, chamada Header . Essa classe deve renderizar uma tag h1 com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente
class Header extends React.Component {
    render() {
        return (
        <header>
            <h1>Conteúdos de Front-End</h1>
        </header>)
    }
}

export default Header;