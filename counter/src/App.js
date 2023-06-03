import './App.css'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    import {React, useState} from 'react';
//Usei chaves para importar mais de um elemento de um mesmo local de uma vez só
function Botoes(){
    // A função useState retorna um array com uma variável e a função para modificar a variável (Apenas a função pode fazer isso)
    const [contador, setContador] = useState(0);

    function clickPlus(){
        setContador(contador+1);
    }
    function clickMinus(){
        setContador(contador-1);
    }
    function reset(){
        setContador(0);
    }
    return(
        //O uso de parênteses é para agrupar e envolver vários elementos em uma única expressão
        <div>
            <h1>Contador</h1>
            <button className ="estilo-botoes" onClick = {clickPlus}>+</button>
            <h6>{contador}</h6>
            <button className="estilo-botoes" onClick = {clickMinus}>-</button>    
            <br/>
            <br/>
            <button className="estilo-botoes" onClick = {reset}>RESET</button>
        </div>
    )
}

// O uso de funções no lugar de classes deixa o código muito menor!

export default Botoes;