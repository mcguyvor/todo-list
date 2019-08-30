import React, { Component } from 'react'
import Todo from './Todo'
import NewTodo from'./NewTodo'
import './Todolist.css'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={ 
            todos : []
        };
        this.create=this.create.bind(this);
        this.remove=this.remove.bind(this);
        this.update=this.update.bind(this);
        this.toggleComplete=this.toggleComplete.bind(this);
    }
    create(newTodo){
        this.setState({
            todos :[...this.state.todos,newTodo]
        });
    }

    remove(id){
        this.setState({
            todos: this.state.todos.filter(arr =>arr.id!==id)
        });
    }
    componentDidUpdate(prevProps,prevState){
        console.log('TODO compoennt did update');
        console.log((prevState));
        console.log(prevProps);
        console.log(this.state.todos);
    }
    componentWillUnmount(){
        console.log('In component will unmount');
    }
    
  update(id, updateTask){
      const upDateTodo = this.state.todos.map(arr=>{
          if(arr.id===id){
              return{...arr, task:updateTask}
          }else{
          return arr;
        }
      });
      this.setState({todos:upDateTodo});
  }
  toggleComplete(id){
    const upDateComplete = this.state.todos.map(arr=>{
        if(arr.id===id){
            return{...arr, complete:!arr.complete}
        }else{
        return arr;
      }
    });
    this.setState({todos:upDateComplete});
}
    render(){
        const todos = this.state.todos.map(arr=>{
            return (<Todo 
                key={arr.id} 
                id={arr.id}
                task={arr.task} 
                removeTask={this.remove} 
                updateTodo={this.update}
                complete={arr.complete}
                toggleComplete={this.toggleComplete}
                />);
        });
        
        return(
            <div className='Todolist'>
                <h1>Todo list!<span>This is todo list</span></h1>
                    <ul>
                        {todos}
                    </ul>       
                    <NewTodo createNewTask={this.create}/>         
            </div>
        );
    }
}
export default TodoList;