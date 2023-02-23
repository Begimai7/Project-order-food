import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchApi } from "../../lib/fetchApi"

const initialState = {
 items: []
}

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    getBasketSuccess(state, action){
     state.items = action.payload
    }
  },
  // extraReducers: (builder) => {
  // builder.addCase(getBasket.fulfilled, (state, action) => {
  //   state.items = action.payload
  // })
  // }
})
console.log(basketSlice);

export const basketAction = basketSlice.actions



export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (payload, { dispatch }) => {
    try{

    }catch(error){
      console.log(error);
    }
    const { data } = await fetchApi("basket");

    dispatch(basketAction.getBasketSuccess(data.items))
  }
)

export const addToBasket = createAsyncThunk(
  'basket/addToBasket',
  async(newItem, { dispatch }) => {
   try{

   await fetchApi(`foods/${newItem.id}/addToBasket`,{
    method: 'POST',
    body: {amount: newItem.amount}
   })
   dispatch(getBasket())
   }catch(error){
       console.log(error);
     }
  }
)

export const updateBasketItem = createAsyncThunk(
  "basket/updateBasketItem",
  async (id, amount, {dispatch}) => {
    try{
       await fetchApi(`basketItem/${id}/update`, {
      method: 'PUT',
      body: { amount }
    })
    dispatch(getBasket())
    }catch(error) {
      console.log(error);
    }
  }
)



 export const deleteBasketItem = createAsyncThunk (
  'basket/deleteBasketItem',
  async(id, { dispatch }) => {
    try{
      await fetchApi(`basketItem${id}/delete`, {
       method: "DELETE"
    })
    dispatch(getBasket())
    }catch(error) {
      console.log(error);
    }
  }
 )


// export const getBasket = () => async (dispatch) => {
//  try{
//    const {data} = await fetchApi("basket")
//    dispatch(basketAction.getBasketSuccess(data.items))
//  }
//  catch(error){
//    console.log(error);
//  }
// };



// export const addToBasket = (newItem) => async (dispatch) => {
//  try{
//   await fetchApi(`foods/${newItem.id}/addToBasket`,{
//    method: "POST",
//    body: {amount: newItem.amount}
//    });
//    dispatch(getBasket())
//  }
//  catch(error){
//    console.log(error);
//  }
// };


// export const updateBasketItem = ({id, amount}) => async(dispatch) => {
//  try{
//     await fetchApi(`basketItem/${id}/update`, {
//      method: 'PUT',
//      body: { amount }
//    })

//    dispatch(getBasket())
//  }catch(error) {
//    console.log(error);
//  }
// }

// export const deleteBasketItem = (id) => async(dispatch) => {
//  try{
//     await fetchApi(`basketItem/${id}/delete`, {
//      method: 'DELETE',
//    })

//    dispatch(getBasket())
//  }catch(error) {
//    console.log(error);
//  }
// }