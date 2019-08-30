import React, { Component } from 'react';
import uuid from'uuid/v4';
class NewTodo extends Component{
    constructor(props){
    super(props);
    this.state={task:''};
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.createNewTask({...this.state,id:uuid(),complete:false});
        this.setState({task:''});
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>New todo</label>
                    <input  
                    type='text'
                    placeholder='New todo'
                    id='task' 
                    value={this.state.task}
                    onChange={this.handleChange}
                    name='task'
                      />
                      <button>Add</button>
                </form>
            </div>
        );
    }
}
export default NewTodo;