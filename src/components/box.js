import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {add, clear} from '../actions'




export default function Box() {

        // const add = useSelector(state => state.add)

        const dispatch = useDispatch();

        let message = () => {
            dispatch(add(document.getElementById("jarjar").value))
            var mess = document.getElementById("jarjar")
            // console.log(mess.value)
            // dispatch(add(mess))
            mess.value = ''
        }


        return(
            <div>
                <h3>Enter your thoughts and let them drift away...</h3>
                <textarea id="jarjar" >
                </textarea>
                <br></br>
                <button onClick={() => message() } >Send thoughts</button>
            </div>
        )
}