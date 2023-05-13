import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "../slices/languageSlice";
import themeSlice from "../slices/themeSlice";

const reducers = {
    lang : languageSlice,
    theme : themeSlice
}

export const store = configureStore({
    reducer: reducers,
})