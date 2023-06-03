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
            <button className="button-style" onClick={clickPlus}>+</button>
            <h6>{counter}</h6>
            <button className="button-style" onClick={clickMinus}>-</button>    
            <br/>
            <br/>
            <button className="button-style" onClick={reset}>RESET</button>
        </div>
    )
}

export default Buttons;