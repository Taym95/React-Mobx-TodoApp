import {observable, action, computed } from 'mobx';

class TodoStore {
    @observable Todos = [];

    @action addTodo = (todo)=>{
        this.Todos.push(todo);
    }

    @computed get todoCount(){
        return this.Todos.length;
    }

    @computed get todoList(){
        return this.Todos;
    }
}

const store = new TodoStore();

export default store;