import { createSlice } from "@reduxjs/toolkit";
import {getTheme} from "../../utilities/theme/theme";

const themeSlice = createSlice({
    name : 'theme',
    initialState : getTheme(),
    reducers : {
        setTheme(state, action) {
            state = action.payload
        }
    }
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer