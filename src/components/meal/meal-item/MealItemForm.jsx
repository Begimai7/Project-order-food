import React from 'react'
import styled from 'styled-components'
import { Button } from '../../UI/Button'
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus-add.svg'


export const MealItemForm = ({id}) => {
  return (
   <FormContainer>
   <Form>
    <label htmlFor={id}>Amount</label>
     <StyledInput type="number" min={1} defaultValue={1} id={id} />
   </Form>
 
        <Button>
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
const StyledIcon =  styled(PlusIcon)`
margin-right: 20px;
`