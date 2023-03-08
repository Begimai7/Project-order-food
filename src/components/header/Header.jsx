import { Button as MuiButton, styled } from '@mui/material'
import React, {  useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styledComponents from 'styled-components'
import { getBasket } from '../../store/basket/basketSlice'
// import { getBasket } from '../../store/basket/basketSlice'
import { modalActions } from '../../store/ui/modalSlice'
import { uiActions } from '../../store/ui/uiSlice'
import { BasketButton } from './BasketButton'


export const Header = ({openBasket}) => {
  const navigate = useNavigate()
  const isAuthorized = useSelector((state)=> state.auth.isAuthorized)


 const dispatch = useDispatch()
 const items = useSelector((state) => state.basket.items)
 const [animationClass, setAnimationClass] = useState("")

 const themeMode = useSelector((state) => state.ui.themeMode)

 useEffect(() => {
  dispatch(getBasket())
 }, [dispatch])

 const totalAmountMeals = () => {
  dispatch(modalActions.openModal())
  const res = +items.reduce((sum, item) => {
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

   return() => {
    clearTimeout(id)
   }
}, [items])

const changeThemeHandler = () => {
const theme = themeMode === "light" ? "dark" : "light"

  dispatch(uiActions.changeTheme(theme))
}

const goToSignIn = () => {
  navigate("/signin")
}

  return (
    <Container>
      <Logo href="/">ReactMeals</Logo>
      <HeaderActions>
        <BasketButton 
       className={animationClass}
       onClick={openBasket} 
       count={totalAmountMeals()}
       /> 
       <Button onClick={changeThemeHandler} >
       {
        themeMode ==="light" ? "Dark mode" : "Light mode"
       }
       </Button>

       {
        isAuthorized ? <Button onClick={goToSignIn}>Sign out</Button> : <Button onClick={goToSignIn}>Sign in</Button>
       }
       
       
      </HeaderActions>
      
    </Container>
  )
}

const Container = styled("div")(({theme})=> ({
  position: "fixed",
  top: "0",
  zIndex: "1",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: theme.palette.primary.main,
  width: "100%",
  height: "101px",
  padding: "0 120px"
}))


const Logo = styledComponents.a`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  color: #FFFFFF;
  text-decoration: none;
`
const HeaderActions = styledComponents.div`
    display: flex;
    justifyContent: space-between;
    alignItems: center;
`
const Button = styled(MuiButton)(({ theme })=> ({
  color: theme.palette.primary.contrastText,
  borderRadius: "60px",
  backgroundColor: theme.palette.primary.dark,
  padding: "10px",
  marginLeft: "10px"
}))