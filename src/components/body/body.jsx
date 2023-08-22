import React from 'react'
import './body.css'

export default function prova() {
    return (
        <>
        <div className="container">
            <h1>Prova 2 Trimestre</h1>
            <div className="country-container">
                <div className="country-list">
                    <p>Categoria<span></span></p>
                    <p>Resposta Correta<span></span></p>
                </div>
            </div>
        </div>
        </>
    )
}

fetch('https://opentdb.com/api.php?amount=30&category=15')
.then((response) => {
    return response.json()
})



