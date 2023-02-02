import React from 'react'
import styled from 'styled-components'
import {ReactComponent as BasketIcon} from "../../assets/icons/basket-icon.svg" 


export const BasketButton = ({count , onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      <BasketIcon />
         <StyledTitle>Your Card</StyledTitle>
         <StyledCounter>{count || 0}</StyledCounter>
      </StyledButton>
  )
}

const StyledButton = styled.button`
font-weight: 600;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
padding: 12px 32px;
background: #5A1F08;
border-radius: 30px;
border: none;
display: flex;
align-items: center;
:hover{
 background-color: #2c0d00;
}

&.bump {
  animation: bump 300ms ease-out;
}

@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}

`
const StyledTitle = styled.span`
padding-left: 14px;
padding-right: 24px;
`
const StyledCounter = styled.span`
background: #8A2B06;
border-radius: 30px;
font-weight: 700;
font-size: 20px;
line-height: 27px;
color: #FFFFFF;
padding: 4px 20px;
`