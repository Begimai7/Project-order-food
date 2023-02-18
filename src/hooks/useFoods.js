import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMeals } from "../store/meals/mealsReducer"

export const useFoods =  () => {
 const dispatch = useDispatch()
 const [sortDirection, setSortDirection] = useState("ASC")
const {meals, isLoading, error} = useSelector((state) => state.meals)

 useEffect(() => {
  dispatch(getMeals())
 }, [dispatch])

 const changeSortDirection = (dir) => {
  setSortDirection(dir)
 }

 const sortedMeals = useMemo(() => {
  const notSorted = [ ...meals];

  return notSorted.sort((a, b) => {
   if(sortDirection === "ASC"){
    return a.price - b.price
   }
   return b.price - a.price
  })
 }, [sortDirection, meals])

 return{
  meals: sortedMeals,
  sortDirection,
  changeSortDirection,
  isLoading, error
 }
}