import React, { useCallback, useState } from 'react'
import { Header } from '../components/header/Header'
import {styled, } from "@mui/material";
import { Basket } from '../components/basket/Basket';
import { Outlet } from 'react-router';




export const UserLayout = () => {
 const [isBasketVisible, setBasketVisible] = useState(false)



 const clickHandler = useCallback(() => {
  setBasketVisible((prevS) => !prevS)
},[isBasketVisible])


  return (
    <div>
    <Header openBasket={clickHandler}/>
      {
      isBasketVisible &&  <Basket onClose={clickHandler}/>
    }
    <Content >
      <Outlet />
    </Content>
    </div>
  )
}

const Content = styled("div")(()=> ({
 marginTop: "101px;"
}))

