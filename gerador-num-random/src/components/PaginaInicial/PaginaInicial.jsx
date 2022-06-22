import React, { useState } from 'react'
import './PaginaInicial.css'

export default function PaginaInicial() {
  const [number, setNumber] = useState(1)
  function random() {
    const number = Math.floor(Math.random() * (100 - 1) + 1)
    setNumber(number)
  }
  return (
    <div className="centralizado">
        <h3>Número aleatório:</h3>
        <h1>{number}</h1>
        <div className="area-botao">
            <label>Click no botão abaixo para gerar um número aleatório</label>
            <button onClick={random}>Gerar número</button>
        </div>
    </div>
  )
}
