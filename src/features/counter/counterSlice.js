import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk(
    "counter/fetchIncrement",
    async (value) => {
        const res = await axios.put("/counter/increment", {value: value});
        console.log(res);
        return res.data;
    }
);

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    },
    extraReducers: {
        [fetchIncrement.fulfilled]: (state, action) => {
            state.value = action.payload.value;
        }
    }
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;