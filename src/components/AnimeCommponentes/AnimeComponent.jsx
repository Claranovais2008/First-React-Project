import React, { useState } from 'react'
import { UseApiAnimeData } from '../../hooks/getAPIDATA';
import AnimeCard from '../AnimeCard/AnimeCard';
export function AnimeComponent() {
    const [animeName, setAnimeName] = useState('one punch');
    const [animeDigitado, setAnimeDigitado] = useState ('one punch');
    const {animeData, loading, error} = UseApiAnimeData(animeName);


    const hadleInputChange=(e)=>{
        setAnimeDigitado(e.target.value);
    }

    function BuscarOAnime(){
        setAnimeDigitado(animeDigitado);
    }

  return (
    <div>
        <input tyoe='text'
        placeholder= 'Enter Anime Name'
        value= {animeDigitado}
        onChange= {hadleInputChange}>

        </input>
        <button onClick= {()=>BuscarOAnime()}>Pesquisar</button>
        {loading && <div> Loading...</div>}
        {error && <div> Error:{error} </div>}
        {Array.isArray(animeData)?(
            <div className= 'anime-cards'>
                {animeData.map((a)=>(<AnimeCard key={a.mal_id}{...a}></AnimeCard>
                ))}
                </div>
        ) : (animeData && <div> Sem nenhum anime </div>)
        }
    </div>
  )
}

