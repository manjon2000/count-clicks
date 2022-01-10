import './App.sass';
import React, {useState} from 'react'

function App() {

  const [contador, setContador] = useState(0);
  const [dangerorsucces ,setdangerorsucces] = useState(['default']); 
  
  const aumentar = () => {
    setContador( (contador + 1) );
    setdangerorsucces('succes');
  };
  const disminuir = () => {
      setContador( 0 );
  }; 
  return (
    <div className="App">
      <div className="contador-float-top"><p>{contador}</p></div>
      <h1>Contador:</h1>
      <p className={dangerorsucces}>{contador}</p>
      <button onClick={aumentar}  className='btn btn_click' >CLICK ME !!!</button>
      <button onClick={disminuir} className='btn btn-reset' >RESET</button>
    </div>
  );
}

export default App;
