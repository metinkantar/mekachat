import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 }

export const sayacSlice = createSlice({
    "name": "sayac",
    initialState,
    reducers: {
        arttir : (state) => {
            state.value++
        },
        azalt: (state) => {
            state.value--
        },
        miktaraGoreArttir: (state, { payload }) => {
            state.value += payload;
        }
    }
});

export const { arttir, azalt, miktaraGoreArttir } = sayacSlice.actions;

export const selectCount = (state) => state.sayac.value;

export default sayacSlice.reducer;