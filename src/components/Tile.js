import React, { useState } from 'react'
import './Tile.css'

function Tile(props) {

    const [tileMark, setTileMark] = useState("")

    function setMark() {
        setTileMark(props.currentMark)
        

        if (props.first !== undefined) {
            props.storeMarks("first", props.currentMark)
        } else if (props.second !== undefined) {
            props.storeMarks("second", props.currentMark)
        }
        else if (props.third !== undefined) {
            props.storeMarks("third", props.currentMark)
        }
        else if (props.fourth !== undefined) {
            props.storeMarks("fourth", props.currentMark)
        }
        else if (props.fifth !== undefined) {
            props.storeMarks("fifth", props.currentMark)
        }
        else if (props.sixth !== undefined) {
            props.storeMarks("sixth", props.currentMark)
        }
        else if (props.seventh !== undefined) {
            props.storeMarks("seventh", props.currentMark)
        }
        else if (props.seventh !== undefined) {
            props.storeMarks("seventh", props.currentMark)
        }
        else if (props.eight !== undefined) {
            props.storeMarks("eight", props.currentMark)
        }
        else if (props.nine !== undefined) {
            props.storeMarks("nine", props.currentMark)
        }

        


        props.getPreviousMark()
    }



    return (
        <div className="mark" onClick={setMark}>
            {tileMark}
        </div>
    )
}


export default Tile

