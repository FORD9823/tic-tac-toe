import React from "react";
import FieldLayout from './FieldLayout'
import './Field.css'

const Field = ({...props}) => {

 return (
        <>
            <FieldLayout  
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



export default Field
