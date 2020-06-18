# potential-octo
Nothing 
import React, {Component} from 'react'
import Inform from './Inform'

class LoginLogout extends Component{
    constructor(){
        super()
        this.state ={
            isLogIn: true,
            count:0
        }
    }

   /* logHandler =() =>{
        this.state.isLogIn     
    }          */
      IncrementByOne(){
                this.setState({
                      count:this.state.count
                })                 
       }


    render(){
        return(
            <div>
            <Inform isLogInuser={this.state.isLogIn}/ >
                {
                   this.state.isLogIn ? (<button>logout </button>):(<button>login</button>)
                }
                 <h1>Count here: {this.state.count}</h1>
                 <button onclick= {() => IncrementByOne()}>increse by one</button>
                </div>             
        )
    }
}
export default LoginLogout
