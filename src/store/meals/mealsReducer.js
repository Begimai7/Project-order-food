import { fetchApi } from "../../lib/fetchApi"

export const mealsActionType = {
 GET_MEALS_START: "GET_MEALS_START",
 GET_MEALS_SUCCESS: "GET_MEALS_SUCCESS",
 GET_MEALS_FAILED: "GET_MEALS_FAILED"
}
const initialState = {
 meals: [],
 isLoading: false,
 error: ''

}

export const mealsReducer = (state = initialState, action) => {
 
 switch(action.type){
  case mealsActionType.GET_MEALS_START:
   return{
    ...state,
    isLoading: true
   }
  case mealsActionType.GET_MEALS_SUCCESS:
   return{
    ...state,
    meals: action.payload,
    isLoading: false,
    error: ""
   }
  case mealsActionType.GET_MEALS_FAILED:
   return{
    ...state,
    meals: action.payload,
    error: ""
   }

   default: return state
 }
}


export const getMeals = () => {

  return async (dispatch, getState) =>{
    try{
      dispatch({ type: mealsActionType.GET_MEALS_START})

      const {data} = await fetchApi("foods");

      dispatch({ type: mealsActionType.GET_MEALS_SUCCESS, payload: data})
    }
    catch(error) {
      dispatch({ 
        type: mealsActionType.GET_MEALS_FAILED,
        payload: "Someting went wrong!!!"
      })
    }
  }
}