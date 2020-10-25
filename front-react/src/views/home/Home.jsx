import React, { useState } from 'react'
import './Home.css'

export default (props) => {

  let [legenda, setLegenda] = useState('Estou no React')

  function resetLegenda() {
    console.log('Evento de click no Angular')
    setLegenda('Estou no React')
  }
  
  return (
    <div className="home">
      <h1>Componente Home</h1>
      <h2>{ props.msg }</h2>
      <h3>{ legenda }</h3>
      <input value={legenda} onChange={ e => setLegenda(e.target.value) } />
      <button onClick={resetLegenda}>Reset Legenda</button>
    </div>
  )
}