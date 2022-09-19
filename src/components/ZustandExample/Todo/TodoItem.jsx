import React from 'react';
import {useStore} from "./TodoStore";

const TodoItem = ({todo}) => {
    const [todoList, setTodoList] = useStore((state) => [state.todoListState, state.setTodoListState]);
    const index = todoList.findIndex((listItem) => listItem === todo);

    const editTodoText = ({target: {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...todo,
            text: value,
        });

        setTodoList(newList);
    };

    const toggleTodoCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...todo,
            isComplete: !todo.isComplete,
        });

        setTodoList(newList);
    };

    const deleteTodo = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={todo.text} onChange={editTodoText}/>
            <input type="checkbox" checked={todo.isComplete} onChange={toggleTodoCompletion}/>
            <button onClick={deleteTodo}>X</button>
        </div>
    );
};

export default TodoItem;

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
