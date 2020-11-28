import React, {Component} from 'react';
import {todoList} from "../../Data/Data";
import Todo from "../Todo-Item/Todo";

class TodoList extends Component {
    render() {
        return (
            <div>
                {todoList.map(item => <Todo todoItem={item} key={item.id}/>)}
            </div>
        );
    }
}

export default TodoList;