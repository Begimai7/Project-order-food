import React, { useContext } from 'react'
import styled from 'styled-components'
import { BasketContext } from '../../store/BasketContext'
import { Modal } from '../UI/Modal'
import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'

export const Basket = ({onClose}) => {
const { items, updateBasketItem, deleteBasketItem } = useContext(BasketContext)

const getTotalPrice = () => {
  return items.reduce((sum, {amount, price}) => sum + price * amount, 0)
}

const decrementAmount = (id, amount) => {
 if(amount > 1){
   updateBasketItem({amount: amount - 1, id})
 }else{
  deleteBasketItem(id)
 }
}
const incrementAmount = (id, amount) => {
 updateBasketItem({amount: amount + 1, id})

}


  return (
    <Modal>
      {
        items.length ? <MapItems>
       {
        items.map((elem) => (
          <BasketItem 
          key={elem._id}
          title={elem.title}
          price= {elem.price}
          amount = {elem.amount}
          decrementAmount={() => decrementAmount(elem._id, elem.amount)}
          incrementAmount={() => incrementAmount(elem._id, elem.amount)}
      />
        ))}
    </MapItems> : null
     
      }
    

      <StyledTotalAmount>
       <TotalAmount
        price={getTotalPrice()}
        onClose ={onClose}
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