import React, {Component} from 'react';

class Todo extends Component {
    state = {isDone: this.props.todoItem.isDone};

    action = (todoItem) => {
        todoItem.isDone = !todoItem.isDone;
        todoItem.priority = !todoItem.priority;
        this.setState({isDone: !this.state.isDone});
    }

    render() {
        let {todoItem} = this.props;
        return (
            <div>
                {
                    todoItem.isDone && (
                        <div>
                            <del>{todoItem.action}</del>
                            - {todoItem.priority.toString()}
                        </div>

                    )
                }
                {
                    !todoItem.isDone && (
                        <div>{todoItem.action} - {todoItem.priority.toString()}</div>
                    )
                }

                <button onClick={() => this.action(todoItem)}>action done</button>
            </div>
        );
    }
}

export default Todo;