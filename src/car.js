import React, {Component} from 'react'


class Car extends Component{

    render(){
        console.log(this.props)
        console.log(this.props.info)
        return(
            <div>
                <h2>hrere im</h2>
                <h1>read the name{this.props,info.model}</h1>
            </div>
        )
    }
}
export default Car