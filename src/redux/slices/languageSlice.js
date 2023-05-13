import { createSlice } from "@reduxjs/toolkit";

const locale = 'en'

const languageSlice = createSlice({
    name : 'lang',
    initialState : locale,
    reducers : {
        setLanguage(state, action) {
            state = action.payload
        }
    }
})

export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer