import React, { Component } from 'react';
import Message from './subComp/message'


const arr = ["stromg", "string", "bing", "Linger"]
export default class Window extends Component{
    
    render(){
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
}