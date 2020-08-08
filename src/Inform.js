
import React from 'react'


const Inform =({isLogInuser})=>{
    return(
        isLogInuser ? (<p>login process....</p>):(<h2>please log in first</h2>)
    )
}
export default Inform
