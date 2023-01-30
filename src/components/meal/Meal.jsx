import React from 'react'
import styled from 'styled-components'
import { MealItem } from './meal-item/MealItem'

const DUMMY_MEALS = [
  {
    id: "meal1",
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: "meal2",
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.00
  },
  {
    id: "meal3",
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99
  },
  {
    id: "meal4",
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99
  }
]
export const Meals = () => {
  return (
    <Card>
      {
        DUMMY_MEALS.map((elem) => {
          return <MealItem
            title={elem.title}
            description={elem.description}
            price={elem.price}
            id={elem.id}
          />
        })
      }
    </Card>
  )
}
const Card = styled.ul`
  position: relative;
  width: 1039px;
  padding: 40px;
  background: #FFFFFF;
  border-radius: 16px;
  margin: 40px auto;
`