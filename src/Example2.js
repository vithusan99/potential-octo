import React from 'react'

function ChildComponent(props) {
  return (
      <div>
          // You can use any of the following ways
          {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
          <button onClick={() => props.greetHandler()}>Greet Parent</button>
      </div>
  )
}
export default ChildComponent
