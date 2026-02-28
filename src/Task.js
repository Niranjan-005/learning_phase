import React from 'react'
import './Task.css'
const Task=({arr})=>{
    console.log(arr)
    return(
        <>
        <center>
        <h1>{arr[0].name}</h1>
        <h1>{arr[1].name}</h1>
        <h1>{arr[2].name}</h1>
        </center>
        </>

    )
}
export default Task