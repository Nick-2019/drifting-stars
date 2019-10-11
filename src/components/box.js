import React, { Component } from 'react';

export default class Box extends Component{
    render(){
        let message = () => {
            var mess = document.getElementById("jarjar")
            console.log(mess.value)
        }
        return(
            <div>
                <h3>Enter your thoughts and let them drift away...</h3>
                <textarea id="jarjar" >
                </textarea>
                <br></br>
                <button onClick={message} >Send thoughts</button>
            </div>
        )
    }
}