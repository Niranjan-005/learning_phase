import React from 'react'
import './Props.css'
const Props=({arr})=>{
    console.log(arr)
    return(
    <>
    <center>
    <h1>{arr[0]}</h1>
    <h1>{arr[1]}</h1>
    <h1>{arr[2]}</h1>
    </center>

    </>
    )

}
export default Props