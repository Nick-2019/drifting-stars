import React, { Component } from 'react';
import Message from './subComp/message'
import {useSelector, useDispatch} from 'react-redux'





export default function Window(){
    const arr = useSelector(state => state.textBox)
        
        return(
            <div id="window">
                <div>
                    {arr.map(word => <Message words={word}></Message> )}
                </div>
                <br></br>
                <button>Clear Thoughts</button>
            </div>
        )
    }