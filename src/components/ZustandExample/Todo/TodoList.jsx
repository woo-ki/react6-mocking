import React from 'react';
import TodoItem from "./TodoItem";
import {useStore} from "./TodoStore";
import TodoCreator from "./TodoCreator";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
    const todoList = useStore((state) => state.filteredTodoListState());

    return (
        <div>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoCreator/>
            {todoList.map((todo => {
                return <TodoItem key={todo.id} todo={todo}/>
            }))}
        </div>
    );
};

export default TodoList;
