import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../lib/fetchApi"


const initialState = {
 meals: [],
 isLoading: false,
 error: ''
}

export const mealsSlice = createSlice({
 name: "meals",
 initialState,
 reducers: {
  
 },
 extraReducers: (builder) => {
  builder.addCase(getMeals.fulfilled, (state, action) => {
    state.meals = action.payload
    state.isLoading = false
  })

  builder.addCase(getMeals.pending, (state, action) => {
    state.isLoading = true
  })

  builder.addCase(getMeals.rejected, (state, action) => {
    state.meals = action.payload
    state.isLoading = false
    state.error = action.payload
  })
 }
})
console.log(mealsSlice);

export const mealsAction = mealsSlice.actions



export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async(payload, {dispatch, rejectWithValue}) => {
  
   try{

   const { data } = await fetchApi("foods");

   return data

   }catch(error){
    return  rejectWithValue("Wroooooong!!!")
   }
  }
)

// export const getMeals = () => {

//   return async (dispatch, getState) =>{
//     try{
//       dispatch(mealsAction.getMealsStart())

//       const {data} = await fetchApi("foods");

//       dispatch(mealsAction.getMealsSuccess(data))
//     }
//     catch(error) {
//       dispatch(mealsAction.getMealsFailed())
//     }
//   }
// }