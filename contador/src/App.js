import './App.css'
import React, { Component } from 'react';


class Contador extends Component{ /*Component é uma classe do próprio react. Criei uma classe contador com base nela.*/
    constructor(props){ /*Criei um método construtor para essa classe nova*/
        super(props); /*Peguei as propriedades da classe Component, entre elas o método state*/
        this.state = { /*No método state eu declaro todos os atributos da minha classe*/
            contador: 0, /*Inicializei um atributo que será o contador com o valor inicial de 0*/
        }
    }
    clickPlus = () => { //Criei uma função (método) chamado click+, para quando o botão for clicado haver um incremento
        this.setState(prevState => ({ /*prevState pega o valor anterior de contador (poderia fazer do 
                                        jeito mais simples mas dessa forma aqui eu tenho certeza que 
                                        o valor que estou pegando é o último*/
            contador: prevState.contador + 1,
        }));
    }
    clickMinus = () => { //Criei uma função (método) chamado click-, para quando o botão for clicado haver decremento
        this.setState(prevState => ({ // O setState acessa o atributo que eu colocar ali embaixo e atualiza o valor dele
            contador: prevState.contador - 1 //Peguei o último valor de contador e fiz um decremento
        }));
    }
    reset = () => {
      this.setState({
        contador: 0, // contador vai ser resetado
      });
    }
    // Agora que já fiz as funções de incremento e decremento, posso "renderizar" para a 
    render(){
        return( //O uso de parênteses é para agrupar e envolver vários elementos em uma única expressão
            <div>
                <h1>Contador</h1>
                <button className ="estilo-botoes" onClick = {this.clickPlus}>+</button>
                <h6>{this.state.contador}</h6>
                <button className="estilo-botoes" onClick = {this.clickMinus}>-</button>
                <br/>
                <br/>
                <button className="estilo-botoes" onClick = {this.reset}>RESET</button>
            </div>
        );
    }
}
export default Contador;