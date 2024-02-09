import React from 'react'

const Header = ({handlefilter,profile}) => {

  return (
    <>
    <div className="header">
      <h1>Pokemon</h1>
      <input type="text" placeholder='search pokemon' className='searchpoko' onChange={(e)=>handlefilter(e.target.value.toLowerCase())}/>
      <p>Developed by <h1>{profile}</h1></p>
    </div>
    </>
  )
}

export default Header