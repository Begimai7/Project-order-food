import React, { useContext } from 'react'
import { useState} from 'react'
import styled from 'styled-components'
import { Button } from '../../UI/Button'
import { ReactComponent as AddIcon } from '../../../assets/icons/plus-add.svg'
import { BasketContext } from '../../../store/BasketContext'


export const MealItemForm = ({id, title, price}) => {
const {addToBasket} = useContext(BasketContext)
 const [amount, setAmount] = useState(1)

 const getAmount = (e) => {
  e.preventDefault()
  setAmount(+e.target.value)
 }

 const submitMeals = () => {
  const basketItem = {
    id,
    title, 
    price, 
    amount
  }
  addToBasket(basketItem)
  console.log(basketItem);
 }

  return (
   <FormContainer onSubmit={submitMeals}>
   <Form>
    <label htmlFor={id}>Amount</label>
     <StyledInput
      type="number" 
      min={1}
      defaultValue={1} 
      id={id}
      value={amount}
      onChange={getAmount}
      />
   </Form>
 
        <Button onClick={submitMeals}>
        <StyledIcon/>
     Add</Button>
   
 </FormContainer>
  )
}

const FormContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 margin: 26px 0 10px;
`
const Form = styled.form`
   display: flex;
   align-items: center;
   margin-bottom: 12px ;

   label{
   font-weight: 600;
   font-size: 18px;
   line-height: 27px;
   color: #222222;
   }
`
const StyledInput = styled.input`
width: 60px;
height: 32px;
border: 1px solid #D6D6D6;
border-radius: 6px;
padding: 4px 12px;
margin-left: 20px;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #222222;
outline: none;
`
const StyledIcon =  styled(AddIcon)`
margin-right: 20px;
`