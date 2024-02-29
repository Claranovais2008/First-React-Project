import { useEffect, useState } from 'react';
import './App.css';
import FunctionDupla from './exemplos/FunctionDupla';
import FunctionSimples from './exemplos/FunctionSimples';
import buttonp from './button/button';
import componentetitulo from './ComponenteTitulo/componentetitulo.jsx';

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
      
      <h1> Use effect foi chamado {useEffect} vezes</h1>
      <FunctionSimples></FunctionSimples>
      <FunctionDupla></FunctionDupla>
      <h1>O useEffect foi chamado {UseEffectCounter} vezes</h1>
     <buttonp tarefa= {logar} class='botao red'>fazer login </buttonp>
     <buttonp tarefa= {deslogar} class= 'botao blue'> deslogar</buttonp>
     <componentetitulo classe= 'test brown'> clicar </componentetitulo>

    </div>
  );
}

export default App;
