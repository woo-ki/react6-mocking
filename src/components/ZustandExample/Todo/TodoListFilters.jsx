import React from 'react';
import {useStore} from "./TodoStore";

const TodoListFilters = () => {
    const [filter, setFilter] = useStore((state) => [state.todoListFilterState, state.setTodoListFilterState]);

    const updateFilter = ({target: {value}}) => {
        setFilter(value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
};

export default TodoListFilters;
