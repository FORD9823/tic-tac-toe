import React from "react";
import Information from "./components/information/Information";
import Field from "./components/field/Field";


const GameLayout = ({...props}) => { 

    return (
        <>
            <Information 
                currentPlayer = {props.currentPlayer}
                isGameEnded = {props.isGameEnded}
                isDraw = {props.isDraw}
                field = {props.field}
                setCurrentPlayer = {props.setCurrentPlayer}
                setIsGameEnded = {props.setIsGameEnded}
                setIsDraw = {props.setIsDraw}
                setField = {props.setField}
                WIN_PATTERNS = {props.WIN_PATTERNS}
            />
            <Field 
                currentPlayer = {props.currentPlayer}
                isGameEnded = {props.isGameEnded}
                isDraw = {props.isDraw}
                field = {props.field}
                setCurrentPlayer = {props.setCurrentPlayer}
                setIsGameEnded = {props.setIsGameEnded}
                setIsDraw = {props.setIsDraw}
                setField = {props.setField}
            />
        </>
    )
}

export default GameLayout
