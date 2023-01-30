import React from 'react'
import styled from 'styled-components'
import { BasketButton } from './BasketButton'

export const Header = () => {
  return (
    <Container>
      <Logo href="/">ReactMeals</Logo>
      <BasketButton> 
      </BasketButton>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #8A2B06;
  width: 100%;
  height: 101px;
  padding: 0 120px;
`
const Logo = styled.a`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #FFFFFF;
  text-decoration: none;
`