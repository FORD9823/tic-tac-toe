
export const onButtonClick = (event) => {
        console.log(event.target)
        if(props.currentPlayer === 'X'){
            if(props.field[event.target.value] === ''){
                props.field[event.target.value] = props.currentPlayer
                props.setCurrentPlayer ('0')    
            }else{
                alert('Ячейка занята')
            }
        }else{
            if(props.field[event.target.value] === ''){
                props.field[event.target.value] = props.currentPlayer
                props.setCurrentPlayer('X')
            }else{
                alert('Ячейка занята')
            }
        }
        
        console.log(props.field)
    }