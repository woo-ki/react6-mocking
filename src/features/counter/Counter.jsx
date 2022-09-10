import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, fetchIncrement, increment, incrementByAmount} from "./counterSlice";

const Counter = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {dispatch(increment())}}>Increment</button>
            <button onClick={() => {dispatch(fetchIncrement(count))}}>Fetch Increment</button>
            <span>{count}</span>
            <button onClick={() => {dispatch(decrement())}}>Decrement</button>
            <button onClick={() => {dispatch(incrementByAmount(5))}}>+5</button>
        </div>
    );
};

export default Counter;