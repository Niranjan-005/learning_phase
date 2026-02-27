import react from 'react'
import './New.css'
const New =()=>{
    return(
       <center className='box'> 
       <>
        <h1>Sign Up</h1>
        <form>
            <div><input type="email" placeholder="Email" /></div>
            <div><input type="password" placeholder="Password" /></div>
            <div><a href="#" >Forgot password?</a></div>
            <div><button type="submit">Sign Up</button></div>
            <div className='acc'><a href="#" >Already have an account?</a></div>
            <div><a href="#" >Log In</a></div>

        </form>
        </>
        </center>

    )
}
export default New;