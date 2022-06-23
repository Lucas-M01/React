import React from 'react';
import { Link } from 'react-router-dom'
import './Global.css'

export default function HomePage() {
    return (
        <div>
            <h1>Escolha seu caminho em JavaScript</h1>
            <div className="conteudo-opcoes">
                <Link className="opcao-front-end" to='/front-end'>Front-end</Link>
                <Link className="opcao-back-end" to='/back-end'>Back-end</Link>
            </div>
        </div>
    )
}