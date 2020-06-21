import React, { useState } from 'react'
import './Board.css'
import Tile from './Tile'

function Board(props) {

    const [state, setState] = useState({
        flag: false,
        currentMark: "X",
        tileMark: "",
    })

    const [array,setArray]=useState({
        first:"",
        second:"",
        third:"",
        fourth:"",
        fifth:"",
        sixth:"",
        seventh:"",
        eight:"",
        nine:""
    })


    function getPreviousMark() {
        if (state.flag === false) {
            setState({
                ...state,
                flag: true,
                currentMark: "O"
            })
        } else {
            if (state.currentMark === "X") {
                setState({
                    ...state,
                    currentMark: "O"
                })
            } else if (state.currentMark === "O") {
                setState({
                    ...state,
                    currentMark: "X"
                })
            }
        }
        // console.log(state.currentMark)
    }

    function storeMarks(num, value) {
        switch (num) {
            case "first": setArray({
                ...array,
                first: value
            })
                break;
            case "second":
                setArray({
                    ...array,
                    second: value
                })
                break;
            case "third":
                setArray({
                    ...array,
                    third: value
                })
                break;
            case "fourth":
                setArray({
                    ...array,
                    fourth: value
                })
                break;
            case "fifth":
                setArray({
                    ...array,
                    fifth: value
                })
                break;
            case "sixth":
                setArray({
                    ...array,
                    sixth: value
                })
                break;
            case "seventh":
                setArray({
                    ...array,
                    seventh: value
                })
                break;
            case "eight":
                setArray({
                    ...array,
                    eight: value
                })
                break;
            case "nine":
                setArray({
                    ...array,
                    nine: value
                })
                break;
        }
    }


    return (
        <div className="main">
            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} first="" storeMarks={storeMarks} />
            </div>
            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} second="" storeMarks={storeMarks} />
            </div>
            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} third="" storeMarks={storeMarks} />
            </div>
            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} fourth="" storeMarks={storeMarks} />
            </div>

            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} fifth="" storeMarks={storeMarks} />
            </div>

            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} sixth="" storeMarks={storeMarks} />
            </div>
            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} seventh="" storeMarks={storeMarks} />
            </div>

            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} eight="" storeMarks={storeMarks} />
            </div>

            <div className="tile">
                <Tile getPreviousMark={getPreviousMark} currentMark={state.currentMark} nine="" storeMarks={storeMarks} />
            </div>


        </div>
    )
}



export default Board

