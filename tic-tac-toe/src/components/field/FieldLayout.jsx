import React from "react";
import './Field.css'

const FieldLayout = ({field, setField, currentPlayer}) => {
    const onClick = () => {
        console.log(currentPlayer)
    }

 return (
        <>
            <div className="buttonField">
                {field.map((item, index) => {
                    return <button key={index} onClick={onClick}>{item}</button>
                })}
            </div>
        </>
    )
    
}



export default FieldLayout
