import axios from "axios";
import ReactDOM from 'react-dom';
import {React, useState} from 'react';

function Operations(){
    const [var1, setVar1] = useState(0);
    const [var2, setVar2] = useState(0);
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState("");
    const handleVar1Change = (event) => {
        setVar1(event.target.value);
    };
    const handleVar2Change = (event) => {
        setVar2(event.target.value);
    };
    function sum(){
        setOperator("+");
        axios
        .get("http://localhost:8000/sum/" + var1 + "/" + var2)
        .then((response) => {
          setResult(response.data.Sum);
        })
    }
    function subtraction(){
        setOperator("-");
        axios
        .get("http://localhost:8000/subtraction/" + var1 + "/" + var2)
        .then((response) => {
          setResult(response.data.Difference);
        })
    }
    function division(){
        setOperator("x");
        axios
        .get("http://localhost:8000/division/" + var1 + "/" + var2)
        .then((response) => {
          setResult(response.data.Quotient);
        })
    }
    function multiplication(){
        setOperator("|");
        axios
        .get("http://localhost:8000/multiplication/" + var1 + "/" + var2)
        .then((response) => {
          setResult(response.data.Product);
        })
    }
    return(
        <div>
            <h2>OPERATIONS</h2>
            <div style={{justifyContent: 'center',display: 'flex',alignItems: 'center' }}>
                <input className="operator_style" type="text" onChange={handleVar1Change}/>
                <h6>{operator}</h6>
                <input className="operator_style" type="text"  onChange={handleVar2Change}/>
            </div>
            <h2>Result:</h2>
            <h3>{result}</h3>
            <button className="button-style" onClick={sum}>Sum</button>
            <button className="button-style" onClick={subtraction}>Subtraction</button>
            <button className="button-style" onClick={division}>Division</button>
            <button className="button-style" onClick={multiplication}>Multiplication</button>
        </div>
    )
}

export default Operations;