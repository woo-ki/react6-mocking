import React, {useState} from 'react';
import {useStore} from "./TodoStore";

const TodoCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useStore((state) => [
        state.todoListState,
        state.setTodoListState
    ]);

    const addItem = () => {
        setTodoList([
            ...todoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChange} />
            <button onClick={addItem}>Add</button>
        </div>
    );
};

export default TodoCreator;

// 고유한 Id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}