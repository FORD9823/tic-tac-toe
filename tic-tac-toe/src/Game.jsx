import React, { useState } from "react";
import GameLayout from './GameLayout'
import './Game.css'


const Game = () => {
    const cells = ['', '', '', '', '', '', '', '', '']
    const [currentPlayer, setCurrentPlayer] = useState('X')
    const [isGameEnded, setIsGameEnded] = useState(false)
    const [isDraw, setIsDraw] = useState(false)
    const [field, setField] = useState(cells)

    const onClick = () => {
        setCurrentPlayer('X')
        setField(cells)
        setIsDraw(false)
        setIsGameEnded(false)
    }
    
    return(
        <>
            <GameLayout 
                currentPlayer = {currentPlayer}
                isGameEnded = {isGameEnded}
                isDraw = {isDraw}
                field = {field}
                setField = {setField}
            />
            <div>
                <button onClick = {onClick}>Начать заново</button>
            </div>
        </>
    )
}


export default Game
