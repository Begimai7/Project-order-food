import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import {  basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { modalSlice } from "./ui/modalSlice";
import { uiSlice } from "./ui/uiSlice";



// export const store = createStore(rootReducere, applyMiddleware(thunk))

export const store = configureStore({
 reducer: {
 [mealsSlice.name]: mealsSlice.reducer,
 [basketSlice.name]: basketSlice.reducer,
 [uiSlice.name]: uiSlice.reducer,
 [modalSlice.name]: modalSlice.reducer,
 [authSlice.name]: authSlice.reducer
 },
})