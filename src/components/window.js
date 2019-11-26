import React, { Component } from 'react';
import Message from './subComp/message'
import {useSelector, useDispatch} from 'react-redux'
import {add, clear} from '../actions'





export default function Window(){
    const arr = useSelector(state => state.textBox.arr)
    const dispatch = useDispatch()

    function wait(){document.getElementById("window").style.opacity = 0.1}

    const buttonAction = () => {

        // console.log("We did it, reddit!")
        // setInterval(wait(0.5), 50000)
        setTimeout(wait(), 9000)
        console.log("we did it?")
        
        // document.getElementById("window").style.opacity = 0.1


        // dispatch(clear())

    }
        


        return(
            <div>
            <div id="window">
                <div>
                    {arr.map(word => <Message words={word}></Message> )}
                </div>
                <br></br>
                
            </div>

            <div><button onClick={() => buttonAction() } >Clear Thoughts</button></div>
            </div>
        )
    }