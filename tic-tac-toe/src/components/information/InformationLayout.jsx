import React from "react";


const InformationLayout = ({props}) => {
    // console.log('InformationLayout', props.isDraw)
    
 return (
        <>
            <div>
                <h1>Сейчас ход - Крестиков/Ноликов</h1>
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
