import React, { Component } from 'react'
import './todo.css'
class Todo extends Component{
    constructor(props){
        super(props);
        this.state={isEditing :false,task:this.props.task}
    this.handleClick=this.handleClick.bind(this);
    this.toggleForm=this.toggleForm.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleUpdate=this.handleUpdate.bind(this);
    this.handleToggleComplete=this.handleToggleComplete.bind(this);
    }
    handleClick(){
        this.props.removeTask(this.props.id);
    }
    toggleForm(event){
        this.setState({
            isEditing: !this.state.isEditing
        });
        event.preventDefault();
    }
    handleUpdate(event){
        event.preventDefault();
        //take new data and pass to parent 
        this.props.updateTodo(this.props.id,this.state.task);
        this.setState({
            isEditing: !this.state.isEditing
        });
        
        
        
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value 
        })
    }
    handleToggleComplete(event){
        event.preventDefault();
        this.props.toggleComplete(this.props.id);
    }

    render(){
        let result;
        if(this.state.isEditing){
            result =(
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input type='text' 
                        value={this.state.task}
                        name='task'
                        onChange={this.handleChange}
                        />
                        
                        <button>Save</button>
                    </form>
                </div>
            );
        }else{
            result=(
                <div className='Todo'>
                    <li className={this.props.completed? 'complete':''} onClick={this.handleToggleComplete}>{this.props.task}</li>
                    <button onClick={this.toggleForm}>Edit</button>
                    <button onClick={this.handleClick}>X</button>
                </div>
            );
        }
        return(result);
    }
}
export default Todo;