import React, { Component } from 'react'
import './Home.css'

export default class Home2 extends Component {

  state = {
    legenda: 'Estou no React (Classe)'
  }

  resetLegenda() {
    console.log('Evento de click no React (Classe)')
    this.setState({
      legenda: 'Estou no React (Classe)!!!!!'
    })
  }

  render() {
    return (
      <div className="home">
        <h1>Componente Home2</h1>
        <h2>{ this.props.msg }</h2>
        <h3>{ this.state.legenda }</h3>
        <input type="text" value={this.state.legenda} onChange={ e => this.setState({ legenda: e.target.value }) } />
        <button onClick={(resetLegenda) => this.resetLegenda()}>Reset Legenda</button>
      </div>
    )
  }
}