import React from 'react'
import {useState} from 'react'
import './Counter.css'

const Counter =()=>{
    const[value,setValue]=useState(true)
    function inc(){
        setValue(!value)
        console.log(value)
    }
    
    
    
    return(
        <center>
        <div>
             <h1>{value?"true":"false"}</h1>
             <div className={value?"box-white":"box-dark"}></div>
             <button onClick={inc}>change</button>
            </div>
            </center>
    )
}
export default Counter
    