import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMealsRequest } from "../../api/mealsServive"
// import { fetchApi } from "../../lib/fetchApi"

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
  
    state.isLoading = false
    // state.error = action.payload
  })
 }
})
console.log(mealsSlice);

export const mealsAction = mealsSlice.actions






export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async( { rejectWithValue}) => {
  
   try{

   const { data } = await getMealsRequest();

   return data

   }catch(error){
    return  rejectWithValue("Wroooooong!!!")
   }
  }
)

