import React from 'react'
import { useEffect, useState } from 'react';
import { FetchPokenmon } from './api/FetchPokemon';
import Home from './component/Home';

const App = () => {
  const [currentURL, setCurrentURL] = useState('https://pokeapi.co/api/v2/pokemon')
  const [detailofpokemon, setDetailofpokemon] = useState([])
  const FetchPokemon = () => {
    FetchPokenmon(currentURL).then((res) => {
      const { results } = res
      setCurrentURL(res.next)

      const getdata = (results) => {
        results.map((element) => [
          FetchPokenmon(`https://pokeapi.co/api/v2/pokemon/${element.name}`).then((res) => {
            setDetailofpokemon(newdata => [...newdata, res])
          })
        ])
      }
      getdata(results)
    })
  }

  useEffect(() => {
    FetchPokemon()
  }, [])

  return (
    <>
      <Home detailofpokemon={detailofpokemon} FetchPokemon={FetchPokemon} />
    </>
  )
}
export default App
