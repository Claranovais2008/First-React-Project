import React from 'react'

function componentetitulo(props) {
  return (
    <div>
        <h1 className= {props.classe} > 
            {props.children}
        </h1>
    </div>

  )
}

export default componentetitulo