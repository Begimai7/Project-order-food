import React from 'react'
import styled from 'styled-components'


export const Button = ({children}) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

const StyledButton = styled.button`
font-weight: 500;
font-size: 16px;
line-height: 24px;
text-align: center;
color: #FFFFFF;
padding: 10px 32px;
background: #8A2B06;
border-radius: 20px;
border: none;
display: flex;
align-items: center;

:hover{
  background: #7E2A0A;
}
:active{
  background: #993108;
}
`