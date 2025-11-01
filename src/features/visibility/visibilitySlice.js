import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    home: true,
    project: false,
    email: false,
}


const visibiltySlice = createSlice({
    name: "visibilty",
    initialState,
    reducers: {
        toggleHome: (state, action) => {
            state.home = true;
            state.project = false
            state.email = false
        },
        toggleProject: (state, action) => {
            state.project = true
            state.home = false;
            state.email = false
        },
        toggleEmail: (state, action) => {
            state.email = true
            state.home = false;
            state.project = false
        }
    }
})


export const { toggleHome, toggleProject, toggleEmail } = visibiltySlice.actions;
export default visibiltySlice.reducer