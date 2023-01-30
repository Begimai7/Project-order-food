import React from 'react'
import styled from 'styled-components'
import { Modal } from '../UI/Modal'
import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'

export const Basket = () => {
  const DUMMY_MEALS = [
    {
      id: "meal1",
      title: "Sushi",
      amount: 3,
      price: 22.99
    },
    {
      id: "meal2",
      title: "Schnitzel",
      amount: 3,
      price: 16.00
    },
    {
      id: "meal3",
      title: "Barbecue Burger",
      amount: 3,
      price: 12.99
    },
    {
      id: "meal4",
      title: "Green Bowl",
      amount: 3,
      price: 19.99
    }
  ]

  return (
    <Modal>
      {
        DUMMY_MEALS.length ? <MapItems>
       {
        DUMMY_MEALS.map((elem) => (
          <BasketItem 
       title={elem.title}
       price= {elem.price}
       amount = {elem.amount}
      />
        ))}
    </MapItems> : null
     
      }
    

      <StyledTotalAmount>
       <TotalAmount
        price={10}
        onClose ={(() => {})}
        onOrder ={(() => {})}
       /> 
      </StyledTotalAmount>
      
    </Modal>
  )
}

const StyledTotalAmount = styled.div`
  padding: 0 1.5rem 1rem;
`
const MapItems = styled.div`
 max-height: 228px;
 overflow-y: scroll;
`