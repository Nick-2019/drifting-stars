import React, { Component } from 'react';
import Message from './subComp/message'
import {useSelector, useDispatch} from 'react-redux'
import {add, clear} from '../actions'





export default function Window(){
    const arr = useSelector(state => state.textBox.arr)
    const dispatch = useDispatch()
        
        return(
            <div id="window">
                <div>
                    {arr.map(word => <Message words={word}></Message> )}
                </div>
                <br></br>
                <button onClick={() => dispatch(clear()) } >Clear Thoughts</button>
            </div>
        )
    }