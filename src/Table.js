import React from 'react'
import './Table.css'

const Table=()=>{
    return(
        <>
        <center>
            <h1>Difference between State and Props</h1>
        <table>
            <tr>
                <th>Aspect </th>
                <th>State</th>
                <th>Props</th>
            </tr>
            <tr>
                <td>Source of Data</td>
                <td>Managed within the component itself.</td>
                <td>Passed from a parent component to a child.</td>
            </tr>
            <tr>
                <td>Mutability</td>
                <td>Mutable (can be changed using useState hook or setState method).</td>
                <td>Immutable (read-only); the receiving component cannot modify them.</td>
            </tr>
            <tr>
                <td>Purpose</td>
                <td>Used for data that changes over time, like user input, toggles, or API responses.</td>
                <td>Used to pass data, functions, or configurations to child components, making them reusable.</td>
            </tr>
            <tr>
                <td>Accessibility</td>
                <td>Only accessible within the component where it's defined.</td>
                <td>Accessible to the child component that receives them.</td>
            </tr>
            <tr>
                <td>Analogy</td>
                <td>Like local variables inside a function.</td>
                <td>Like function parameters or arguments.</td>
            </tr>
        </table>
        </center>
        </>
    )
}
export default Table