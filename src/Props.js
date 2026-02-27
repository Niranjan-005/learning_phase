import React from 'react'
const Props=({test})=>{
    console.log(test)
    return(
    <>
    <h1>{test[0]}</h1>
    <h1>{test[1]}</h1>
    <h1>{test[2]}</h1>
    
    </>
    )

}
export default Props