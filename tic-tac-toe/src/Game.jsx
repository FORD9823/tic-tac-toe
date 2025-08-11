import React, { useState } from "react";
import GameLayout from './GameLayout'
import './Game.css'


const Game = () => {
    const WIN_PATTERNS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
        [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
    ];
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
                setCurrentPlayer = {setCurrentPlayer}
                setIsGameEnded = {setIsGameEnded}
                setIsDraw = {setIsDraw}
                setField = {setField}
                WIN_PATTERNS = {WIN_PATTERNS}
            />
            <div>
                <button onClick = {onClick}>Начать заново</button>
            </div>
        </>
    )
}


export default Game
