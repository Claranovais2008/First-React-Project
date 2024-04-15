import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div classNmae="home">
      <div className="overlay">
        <div className="card">
          <h1>HOME</h1>
          <p>
            Um site de Anime, planejado para você!
          </p>
          <button> <a href='/anime'> Descubra Mais</a></button>

        </div>
      </div>
    </div>
  )
}

export default HomePage