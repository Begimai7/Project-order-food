import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {  basketSlice } from "./basket/basketSlice";
import { mealsSlice } from "./meals/mealsSlice";
import { modalSlice } from "./ui/modalSlice";
import { uiSlice } from "./ui/uiSlice";

const rootReducere = combineReducers({
 [mealsSlice.name]: mealsSlice.reducer,
 [basketSlice.name]: basketSlice.reducer,
 [uiSlice.name]: uiSlice.reducer,
 [modalSlice.name]: modalSlice.reducer
})

export const store = createStore(rootReducere, applyMiddleware(thunk))