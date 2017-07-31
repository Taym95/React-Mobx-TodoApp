import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import logo from './logo.svg';
import './App.css';
@inject('TodoStore')
@observer
class App extends Component {

    hendlerSubmit = (e) => {

        e.preventDefault();
        const Todo = this.todo.value;

        if(Todo){
            this.props.TodoStore.addTodo(Todo);
            this.todo.value = '';
        }


    };
    render() {

        const {TodoStore} = this.props;
        return (

        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <h2> You have {TodoStore.todoCount} TODOS</h2>

            <form onSubmit={e =>this.hendlerSubmit(e)}>
                <input type="text" placeholder="add TODO" ref={input => this.todo=input}/>
                <button> Add Todo</button>
            </form>

            <ul>
                {
                    TodoStore.todoList.map((todo, i) => (
                        // I am using the index (i) as key just for simplicity purpose
                        <div key={i}> {i+1}- {todo}</div>
                    ))
                }
            </ul>
        </div>
        );
    }
}

export default App;
