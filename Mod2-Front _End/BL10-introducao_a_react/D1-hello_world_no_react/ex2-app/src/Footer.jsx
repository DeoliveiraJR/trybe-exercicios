// Exercicio 3 - Crie um novo projeto utilizando npx create-react-app :
// Crie um novo arquivo Footer.jsx ;
import React from 'react';

// No arquivo Footer.jsx , crie uma classe chamada Footer .
class Footer extends React.Component {
    render() {
        // A classe Footer deve renderizar uma tag h1 com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.
        return (
            <footer>
                <h1>E isso é só o começo...</h1>
            </footer>
        )
    }
}

export default Footer;