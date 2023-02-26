import React from 'react'
import styled from 'styled-components'
import { Button } from "../UI/Button"

export const TotalAmount = ({price, onClose, onOrder}) => {

  const closeBtnStyle = {
    background: "#fff",
    color: "#973d19",
    border: "none",
    fontWeight: "bold",

     "&:hover": {
      backgroundColor: "#973d19",
      color: "#fff"
    }
  }

 const orderButton = price > 0 && <Button onClick={onOrder}>Order</Button>

  return (
    <TotalAmountStyled>
 
    <TotalContainer>
    <Label>Total Amount</Label>
    <Price>${price.toFixed(2)}</Price>
    </TotalContainer>

    <StyledButtons>
     <Button style={closeBtnStyle} onClick={onClose}>Close</Button>
     {orderButton}
     </StyledButtons>

    </TotalAmountStyled>
  )
}

const TotalAmountStyled = styled.div`
 margin-top: 20px;
`
const TotalContainer = styled.div`
 display: flex;
 justify-content: space-between;
`
const Label = styled.p`
font-weight: 700;
font-size: 20px;
line-height: 30px;
text-align: center;
color: #222222;
padding: 0;
`
const Price = styled.p`
font-weight: 600;
font-size: 22px;
line-height: 33px;
color: #8A2B06;
padding: 0;
`
const StyledButtons = styled.div`
 display: flex;
 justify-content: flex-end;
 gap: 1rem;
 margin-top: 24px;
`

//    <Button variant="outline" onClick={onClose}>Close</Button>