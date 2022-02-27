window.onload = function() {
  
  //function salva o bakcground no storage
  let elementSelect = document.querySelector('select');
  elementSelect.addEventListener('change', function(){
    let valorSelect = elementSelect.selectedOptions[0].value;
    document.body.style.backgroundColor = valorSelect;

    localStorage.setItem('Background-saved', valorSelect);
  });

  //function salva o tamanho da fonte no storage
  let elementInputSizeFont = document.querySelector('#input-sizeFont')
  elementInputSizeFont.addEventListener('change', function() {
    let elementP = document.querySelector('p');
    elementP.style.fontSize = `${elementInputSizeFont.value}px`;
    
    localStorage.setItem('FontSize-saved', `${elementInputSizeFont.value}px`)
  });

  //function salva o espaçamnto da fonte no storage
  let elementInputLineHeight = document.querySelector('#input-lineHeight')
  elementInputLineHeight.addEventListener('change', function() {
    let elementP = document.querySelector('p');
    elementP.style.lineHeight = `${elementInputLineHeight.value}px`;
    
    localStorage.setItem('LineHeight-saved', `${elementInputLineHeight.value}px`)
  });

  //function salva o fontFamily:
 
  let elementSelectFont = document.querySelector('#Font-family');
  elementSelectFont.addEventListener('change', function(){
    let fontSelect = elementSelectFont.value;
    document.body.style.fontFamily = fontSelect;

    localStorage.setItem('FontFamily-saved', fontSelect);
  });

  //LOADS - Carregando as preferencias:
    
  //Carrega o background:
  let loadBackgroundColor = localStorage.getItem('Background-saved')
  document.body.style.backgroundColor = loadBackgroundColor;
  
  //carrega o tamanho da fonte
  let loadFontSize = localStorage.getItem('FontSize-saved')
  let elementP = document.querySelector('p');
  elementP.style.fontSize = loadFontSize;
    
  //carrega o tamanho da fonte
  let loadLineHeight = localStorage.getItem('LineHeight-saved')
  elementP.style.lineHeight = loadLineHeight;

  //carrega o tamanho da fonte
  let loadFontFamily = localStorage.getItem('FontFamily-saved')
  document.body.style.fontFamily = loadFontFamily;
}