import React from "react";
import Information from "./components/information/Information";
import Field from "./components/field/Field";


const GameLayout = ({...props}) => { 

    return (
        <>
            <Information currentPlayer = {props.currentPlayer} isGameEnded = {props.isGameEnded} isDraw = {props.isDraw} />
            <Field currentPlayer = {props.currentPlayer} field = {props.field} setField = {props.setField}/>
        </>
    )
}

export default GameLayout
