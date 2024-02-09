import React, { useEffect, useState } from 'react'
import Header from './Header'

const Home = ({ detailofpokemon, FetchPokemon }) => {

  const [hideshow, setHideshow] = useState([false]);
  const [updatedpokemondata, setUpdatedpokemondata] = useState([])
  const dev = 'Rohit kanojiya';

  const handleToogle = (index) => {
    const duplarray = [...hideshow]
    duplarray[index] = !duplarray[index]
    setHideshow(duplarray)
  }

  useEffect(() => {
    setUpdatedpokemondata(detailofpokemon)
  }, [detailofpokemon])

  const handlefilter = (value) => {
    if (value === '' || value === null || value === undefined) {
      setUpdatedpokemondata(detailofpokemon)
    } else {
      const updateddeta = detailofpokemon.filter((ele) => {
        return ele.name.toLowerCase().includes(value)
      })
      setUpdatedpokemondata(updateddeta)
    }
  }
  return (
    <>
      <Header handlefilter={handlefilter} profile={dev} />
      <div className="homeContainer">
        {
          updatedpokemondata.map((pokemdata, index) => (
            <div className="card" key={index} style={{ backgroundColor: hideshow[index] && 'black' }} >
              <div className="pokemondata">
                <div className="dataone">
                  <h1 className='name'>{pokemdata.name}</h1>
                  <button className='name btn' onClick={() => handleToogle(index)}>{hideshow[index] ? 'hide info' : 'view info'}</button>
                </div>
                {
                  hideshow[index] ? (
                    <div className="detatwo">
                      <div> <p>{pokemdata.id}</p>  <img src={pokemdata.sprites.other.dream_world.front_default} alt="pokemon-image" className='datatwoimg' /></div>
                      <p>weight {pokemdata.weight}.</p>
                      <p>moves {pokemdata.moves[0].move.name}</p>
                    </div>
                  ) : null
                }
              </div>
              {
                hideshow[index] ? null : (<img onClick={() => handleToogle(index)} src={pokemdata.sprites.other.dream_world.front_default} alt="pokemon-image" className='pokemon-image' />)
              }
            </div>
          ))
        }
        <button onClick={() => FetchPokemon()} className='loadmore'>Load More</button>
      </div>
    </>
  )
}

export default Home
