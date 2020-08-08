import React, { useState } from 'react'

// const WithIncrement =(WrappedComponent) => {
// class NewComponent extends Component{

// constructor(){
//     super()
//     this.state={
//         count:0
//     }
//     }

// incrementCount =()=> {
// this.setState=((e) =>( {
//     count:e.count +1
//     }))
// } 


// render() { 
//     return(
//         <WrappedComponent count={this.state.count} increHandler={this.incrementCount} />
//     )
// }

// }
// return NewComponent
// }
// export default WithIncrement

function HookCounter (){
    // const initialCount=0
    const [count,setCount] =useState(0)

const incrementByFive=() => {
for(var i=0; i<5; i++ ){
    setCount(x => x+1)
}
}

    return(
        <div>
            <p>u clicked {count} times</p>
            <button onClick={() =>setCount(count+1)}>increment by one</button><br/>
            <button onClick={() =>setCount(count-1)}>decrement by one</button>
            <button onClick={() =>setCount(0)}>Reset value</button><br/>
            <button onClick={incrementByFive}>increment by five </button>
        </div>
    )
}
export default HookCounter