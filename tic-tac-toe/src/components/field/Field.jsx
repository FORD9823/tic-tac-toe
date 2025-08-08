import React from "react";
import FieldLayout from './FieldLayout'
import './Field.css'

const Field = ({...props}) => {

 return (
        <>
            <FieldLayout  field = {props.field} currentPlayer = {props.currentPlayer} setField = {props.setField}/>
        </>
    )
    
}



export default Field
