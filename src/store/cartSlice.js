import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            const articul = data.payload;

            if (state.value[articul] === undefined) state.value[articul] = 0;

            state.value[articul]++;
        },
        decremet: (state, data) => {
            const articul = data.payload;

            if (state.value[articul] > 1) {
                state.value[articul]--;
            } else {
                delete state.value[articul];
            }
        },
        remove: (state, data) => {
            const articul = data.payload;

            delete state.value[articul];
        }
    }
});

export const { increment, decremet, remove } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;