import React from 'react'
import styled from 'styled-components'
import { Button } from '../UI/Button'
import { ReactComponent as MinusIcon} from '../../assets/icons/minus-icon.svg'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus-icon.svg'

export const BasketItem = ({title, price, amount}) => {

  return (
    <Container>
     <FoodName>{title}</FoodName>

     <Content>
     <PriceAndAmountContainer>
      <Price>${price}</Price>
      <Amount>x{amount}</Amount>
     </PriceAndAmountContainer>

     <ButtonsContainer>
      <Button borderSquare='square' variant='outline'> <MinusIcon/> </Button>
      <Button borderSquare='square' variant='outline'> <PlusIcon/></Button>
     </ButtonsContainer>

     </Content>
      
    </Container>
  )
}
const Container = styled.div`
 padding: 24px 0;
`
const FoodName = styled.p`
 font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #222222;
margin: 0 0 12px 0;
`
const Price = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #AD5502;
margin: 0;
`
const Amount = styled.span`
border: 1px solid #D6D6D6;
border-radius: 6px;
padding: 6px 14px;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #222222;
display: block;

`
const Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const PriceAndAmountContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 153px;
`
const ButtonsContainer = styled.div`
 display: flex;
 gap: 14px;
`