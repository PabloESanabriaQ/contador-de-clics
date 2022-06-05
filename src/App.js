import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';

function App() {

  const [numeroClicks, setNumeroClicks] = useState(0);

  const manejarClick = () => {
    setNumeroClicks(numeroClicks + 1);
  };

  const reiniciarContador = () => {
    setNumeroClicks(0);
  };
  
  return (
    <div className='App'>
     <div className='freecodecamp-logo-contenedor'>
       <img 
       className='freecodecamp-logo'
       src={freeCodeCampLogo}
       alt='Logo de FreeCodeCamp'/>
     </div>
    <div className='contenedor-principal'>
      <Contador 
      numeroClicks={numeroClicks}
      />
      <Boton 
      texto='Click'
      esBotonClick= {true}
      manejarClick={manejarClick}
      />
        
      <Boton 
      texto='Reiniciar'
      esBotonClick= {false}
      manejarClick={reiniciarContador}
      />
    </div>
    </div>
  );
}

export default App;
