import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { basketReducer } from "./basket/basketReducer";
import { mealsReducer } from "./meals/mealsReducer";

const rootReducere = combineReducers({
 meals: mealsReducer,
 basket: basketReducer
})

export const store = createStore(rootReducere, applyMiddleware(thunk))