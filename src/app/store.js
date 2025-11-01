import { configureStore } from "@reduxjs/toolkit";
import visibiltySlice from "../features/visibility/visibilitySlice"
export const store = configureStore({
    reducer: {
        visibilty: visibiltySlice
    }
})