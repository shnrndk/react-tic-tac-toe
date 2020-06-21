import React,{useState} from 'react'
import Board from './Board'
import './Display.css'

function Display(props) {

    const [winner, setWinner] = useState("")

    function findWinner(value){
        setWinner(value)
    }

    return (
        <div className="board">
            <Board findWinner={findWinner}/>
            {winner.length>0 && 
            <div className="winner">
                {winner} is the Winner
            </div>}
        </div>
    )
}


export default Display

