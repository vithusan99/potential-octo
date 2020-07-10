import React from'react'

function clickButton(){
    function onHandler(){
        console.log("When clicked button")
    }
    return(
        <div>
            <button onClick={onHandler }>Click Here</button>
        </div>
    )
}
export default clickButton