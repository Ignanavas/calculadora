import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import {useState} from 'react';
import {evaluate} from 'mathjs';
function App() {

  const [input, setInput] = useState ('');
  
  const agregarInpunt = val => {
    setInput(input + val);

  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input))
    }
    else {
      alert("Tenes que tocar un numero para calcular")
    }
  };
  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
      <img
      src = {freeCodeCampLogo}
      className='freecodecamp-logo'
      alt='Logo de Freecodecamp.png' />
     </div>
     <p> 1+1</p>
     <div className='titulo-calculadora'>
     </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInpunt}>1</Boton>
          <Boton manejarClic={agregarInpunt}>2</Boton>
          <Boton manejarClic={agregarInpunt}>3</Boton>
          <Boton manejarClic={agregarInpunt}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInpunt}>4</Boton>
          <Boton manejarClic={agregarInpunt}>5</Boton>
          <Boton manejarClic={agregarInpunt}>6</Boton>
          <Boton manejarClic={agregarInpunt}>-</Boton>
          </div>
        <div className='fila'>
          <Boton manejarClic={agregarInpunt}>7</Boton>
          <Boton manejarClic={agregarInpunt}>8</Boton>
          <Boton manejarClic={agregarInpunt}>9</Boton>
          <Boton manejarClic={agregarInpunt}>*</Boton>
          </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInpunt}>0</Boton>
          <Boton manejarClic={agregarInpunt}>.</Boton>
          <Boton manejarClic={agregarInpunt}>/</Boton>
          </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
