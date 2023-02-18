import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getBasket } from '../../store/basket/basketReducer'
import { BasketButton } from './BasketButton'

export const Header = ({openBasket}) => {
  const dispatch = useDispatch()
 const items = useSelector((state) => state.basket.items)
 const [animationClass, setAnimationClass] = useState("")

 useEffect(() => {
  dispatch(getBasket())
 }, [dispatch])

 const totalAmountMeals = () => {
  const res = items.reduce((sum, item) => {
    return sum + item.amount
  }, 0)
  return res
 }

useEffect(() => {
   setAnimationClass("bump")

   const id = setTimeout(() => {
    setAnimationClass("")

    return () => {
     clearTimeout(id)
    }
   }, 300)
}, [items])

  return (
    <Container>
      <Logo href="/">ReactMeals</Logo>
      <BasketButton 
       className={animationClass}
       onClick={openBasket} 
       count={totalAmountMeals()}
       /> 
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