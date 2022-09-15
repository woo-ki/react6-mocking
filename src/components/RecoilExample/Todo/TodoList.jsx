import React from 'react';
import {filteredTodoListState, todoListState} from "./TodoStore";
import {useRecoilValue} from "recoil";
import TodoItem from "./TodoItem";
import TodoCreator from "./TodoCreator";
import TodoListStats from "./TodoListStats";
import TodoListFilters from "./TodoListFilters";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState)
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
