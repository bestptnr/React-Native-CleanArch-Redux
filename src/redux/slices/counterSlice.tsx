import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
    value: number
}
const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1;
        },
        decrement: state => {
            state.value -= 1;
        },
        incrementByAmount: (state, actions) => {
            state.value = actions.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;