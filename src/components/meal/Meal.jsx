import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchApi } from '../../lib/fetchApi'
import { MealItem } from './meal-item/MealItem'

// const DUMMY_MEALS = [
//   {
//     id: "meal1",
//     title: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99
//   },
//   {
//     id: "meal2",
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.00
//   },
//   {
//     id: "meal3",
//     title: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99
//   },
//   {
//     id: "meal4",
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99
//   }
// ]


 const Meals = () => {
  const [meals, setMeals] = useState([])
  const [error, setError] = useState("")

  const getMeals = async() => {
    try{
      const response = await fetchApi("foods")
   setMeals(response.data)
    }
    catch(error){
      setError('WRONG...')
    }
  }


  useEffect(() => {
    getMeals()
  }, []) 
 

  return (
    <Card>
      {
       meals.map((elem) => {
          return <MealItem
            key={elem.id}
            title={elem.title}
            description={elem.description}
            price={elem.price}
            id={elem._id}
          />
        })
      }
    </Card>
  )
}

export default Meals;
const Card = styled.ul`
  position: relative;
  width: 1039px;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 16px;
  margin: 40px auto;
`