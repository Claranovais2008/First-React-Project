import React from 'react'
import './botao.css'
function buttonp(props) {
  return (
    <div>  
        <button onClick={props.tarefa} className={props.class}> 
            {props.children} 
        </button>
    </div>
  )
}

export default buttonp