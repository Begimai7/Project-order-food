import { axiosIntstance } from "../config/axiosInstance"


export const getMealsRequest = () => {
  return axiosIntstance.get('/foods')
}

export const getMealsToBasketReq = () => {
 return axiosIntstance.get('/basket')
}
export const addMealsToBasketReq = (newItem) => {
 return axiosIntstance.post(`foods/${newItem.id}/addToBasket`, {
  body: {amount: newItem.amount}
 })
}
export const updateBasketItemReq = (id, amount) => {
 return axiosIntstance.update(`basketItem/${id}/update`, {
  body: { amount }
 })
}
export const deleteBasketItemReq = (id, amount) => {
 return axiosIntstance.delete(`basketItem/${id}/delete`)
}
export const submitOrderReq = (orderData) => {
 return axiosIntstance.post("https://jsonplaceholder.typicode.com/posts", {
  body: orderData
 })
}