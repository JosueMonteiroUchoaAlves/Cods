import React, { useState } from 'react';

function Button() {
  // Define um estado para o texto
  let cont = 0;
  const [text, setText] = useState(cont);

  // Função que muda o texto quando o botão é clicado
  function handleClick() {
    cont = cont+1
    setText(cont);
  }

  return (
    <div>
      {/* Exibe o texto atual */}
      <p>{text}</p>
      {/* Botão que chama a função de clique */}
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Button;
