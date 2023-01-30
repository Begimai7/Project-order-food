import React from 'react'
import styled from 'styled-components'


export const Button = ({children, variant = "contained", borderSquare = "circle"}) => {
  return (
    <StyledButton borderSquare={borderSquare} variant={variant}>{children}</StyledButton>
  )
}

const getBackground = props => props.variant === "contained" ? "#8A2B06" : "#fff";

const getColor = (props) => {
  return props.variant === "contained" ? "#fff" : "#8A2B06";
}
const getBorder = (props) => {
  return props.variant === "contained" ? "none" : "1px solid #8A2B06"
}
const getBorderRad = (props) => {
  return props.borderSquare === "circle" ? "20px" : "6px" 
}

const StyledButton = styled.button`
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: ${getColor};
padding: 10px 32px;
background: ${getBackground};
border-radius: ${getBorderRad};
border: ${getBorder};
display: flex;
align-items: center;

:hover{
  background: #7E2A0A;
  color: #fff;
}
:active{
  background: #993108;
}
`