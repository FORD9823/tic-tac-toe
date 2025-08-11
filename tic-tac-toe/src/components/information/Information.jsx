import React from "react";
import InformationLayout from "./InformationLayout";


const Information = ({...props}) => {
 return (
        <>
            <InformationLayout 
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
        </>
    )
}


export default Information
