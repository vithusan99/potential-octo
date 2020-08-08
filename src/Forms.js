import React from 'react'
import  RefsDemo from './Column'
class Form extends React.Component{
    constructor (props){
        super(props)
        this.state={
            username:"",
            comments:"",
            topic:""
        }
    }


    handleCommentChange=(el)=>{
        this.setState=({
            comments:el.target.value
        })
    }
        handleTopicChange=(e) =>{
            this.setState=({
topic:e.target.value
            })
        }
        handleSubmit = ()=> {
            alert(`$(this.state.username) .....$(this.state.comments)....$(this.state.topic)`)
        }



    

    render(){
        return(
            <form>
                   <div>
                    <lable>Usaername</lable>
                    <input type='text' value={this.state.username}/>
                    </div>
                    <div>
                    <lable>Comments</lable>
                    <textarea  value={this.state.comments} onChange={this.handleCommentChange}/>
                    </div>
                    <div>
                        <lable>Topic</lable>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">vue</option>
                         </select>
                    </div>
                    <RefsDemo/>
                    <button type="submit">submit</button>
           </form>
        )
        
    }
}

export default Form