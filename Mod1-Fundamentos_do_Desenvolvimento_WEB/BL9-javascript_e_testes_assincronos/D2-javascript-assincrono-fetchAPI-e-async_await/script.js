// # 9.1 - Fetch API e async/await:

// Exemplo: relembrando a utilidade do json, convertendo a string abaixo em um objeto e utilizando no HTML:
const jsonInfo = `{
    "muitasEmpresasUsam": [
      "Google",
      "Twitter",
      "Facebook",
      "etc..."
    ],
    "temVariasVantagens": [
      "Legível",
      "Fácil de usar",
      "Leve",
      "Popular",
      "Versátil"
    ],
    "muitasLinguagensDaoSuporte": [
      "Python",
      "C",
      "C++",
      "Java",
      "PHP"
    ]
  }`;
  
  // converte a string em objeto js:
  const usoJSONPorque = JSON.parse(jsonInfo);
  
  // 2. recupera os elementos ul de cada lista: 
  const corporationsList = document.getElementById('corporations-used-by'); // ul pai da node list 1 abaixo
  const advantagesList = document.getElementById('advantages'); // ul pai da node list 2 abaixo
  const languagesList = document.getElementById('languages-used-by'); // ul pai da node list 3 abaixo
  
  // 3. adiciona os elementos da array 'muitasEmpresasUsam' a uma lista na ul 'corporationsList'
  usoJSONPorque.muitasEmpresasUsam.map((empresa) => { // map.: vamos percorrer cada elemento do array e retornar um input na lista para cada 
    const newLi = document.createElement('li'); // 3.1 cria elemento li e armazena em uma variavel;
    newLi.innerText = empresa; // 3.2 adiciona cada elemento contido no array como texto da li criada;
    corporationsList.appendChild(newLi); // 3.2 adiciona a li criada a ul contida na variavel corporationList 
  });
  
  // repete o mesmo fluxo do passo anterior 3.
  usoJSONPorque.temVariasVantagens.map((vantagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = vantagens;
    advantagesList.appendChild(newLi);
  });
  
  // repete o mesmo fluxo do passo anterior 3.
  usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
    const newLi = document.createElement('li');
    newLi.innerText = linguagens;
    languagesList.appendChild(newLi);
  });

  // A função assíncrona é diferente! Quando o javascript lê uma função desse tipo, ela é enviada para uma área especial, e a fila síncrona continua correndo. 
