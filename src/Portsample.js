import React from 'react'
import ReactDOM from 'react-dom'


function Sampleportal(){
    return ReactDOM.createPortal(
        <h1>Sample Portal</h1>, document.getElementById('portal-root')
    )
}

export default Sampleportal