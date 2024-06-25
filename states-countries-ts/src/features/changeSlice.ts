import { createSlice } from "@reduxjs/toolkit";

export interface ChangeState {
    value: boolean
}

const initialState: ChangeState = {
    value: true
}

export const changeSlice = createSlice({
    name: 'change',
    initialState,
    reducers: {
        setToTrue: (state) => {
            state.value = true;
        },
        setToFalse: (state) => {
            state.value = false;
        }
    }
})

export const {setToTrue, setToFalse} = changeSlice.actions;
export default changeSlice.reducer;