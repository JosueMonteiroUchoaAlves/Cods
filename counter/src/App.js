import './App.css'
import {React, useState} from 'react';

function Buttons(){
    const [counter, setCounter] = useState(0);

    function clickPlus(){
        setCounter(counter+1);
    }
    function clickMinus(){
        setCounter(counter-1);
    }
    function reset(){
        setCounter(0);
    }
    return(
        <div>
            <h1>Counter</h1>
            <h6>{counter}</h6>
            <button className="button-style" onClick={clickPlus}>+</button>
            <button className="button-style" onClick={reset}>RESET</button>
            <button className="button-style" onClick={clickMinus}>-</button>    
        </div>
    )
}

export default Buttons;