import React from 'react'
import "./Favorito.css"
import { useLoaderData } from  'react-router-dom'
import AnimeCard from '../AnimeCard/AnimeCard';
function Favorito() {
    const {data} = useLoaderData();
  return (
    <div className= 'container'>
        <div className='anime-cards'>
            {data.map((a) =>( <AnimeCard key={a.mal_id} {...a} />))}
        </div>
    </div>
  )
}

export default Favorito