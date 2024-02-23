import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [logado, setlogado] = useState(false);
  const [UseEffectCounter, SetUseEffectCounter] = useState(0);

  useEffect(() => {
    console.log("O UseEffect foi chamado")
    SetUseEffectCounter(UseEffectCounter + 1)
  },[logado])

  const logar = () => {
    setlogado(true);
  }
  const deslogar = () => {
    setlogado(false);
  }

  return (
    <div>
      <h1>O useEffect foi chamado {UseEffectCounter} vezes</h1>
      {logado ?<p>Logado </p> : <p> Deslogado </p>}
      <button onClick={logar} ><p>Logar </p> </button>
      <button onClick={deslogar} ><p>Deslogar </p> </button>
    </div>
  );
}

export default App;
