import React from "react";


const InformationLayout = ({...props}) => {
  const xArr = []
  const zeroArr = []

  for (let i = 0; i <= props.field.length; i++){
    if(props.field[i] === 'X'){
      xArr.push(i)  
    } 
    if(props.field[i] === '0'){
      zeroArr.push(i)  
    }
    
  }

  const checkWinningPatternByX = props.WIN_PATTERNS.map(item => item.every(item => xArr.includes(item)))
  const isHaveWinningPaternByX = checkWinningPatternByX.some(item => item === true)
  const checkWinningPatternByZero = props.WIN_PATTERNS.map(item => item.every(item => zeroArr.includes(item)))
  const isHaveWinningPaternByZero = checkWinningPatternByZero.some(item => item === true)

  if(isHaveWinningPaternByZero === true || isHaveWinningPaternByX === true){
    props.setIsGameEnded = true
  }else if(isHaveWinningPaternByX === false && isHaveWinningPaternByZero === false && xArr.length === 5){
    props.setIsGameEnded = true
    props.isDraw = true
  }

  return (
        <>
            <div>
                <h1>{props.currentPlayer === 'X' ? `Сейчас ход - Крестиков` : `Сейчас ход - Ноликов`}</h1>
                {props.isDraw === true ? (
                  <h1>Ничья</h1>  
                ) : (
                    props.isGameEnded === true ? (
                      <h1>Победа: {props.currentPlayer}</h1>  
                    ) : (
                      <h1>Ходит: {props.currentPlayer}</h1> 
                    )
                )}
            </div>
        </>
    )
}


export default InformationLayout
