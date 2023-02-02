import './App.css';
import { Header } from "./components/header/Header"
import { Summery } from "./components/summery/Summery"
import  Meals  from "./components/meal/Meal"
import { Basket } from "./components/basket/Basket"
import styled from 'styled-components';
import { useState } from 'react';
import { BasketProvider } from './store/BasketContext';

function App() {
const [isVisibleButton, setVisibleButton] = useState(false)

 const toggleButtons = () => {
  setVisibleButton((prevS) => !prevS)
 }

  return (
   <BasketProvider>
    <Header openBasket={toggleButtons}/>
    <Content>
    <Summery />
    <Meals />

    {
      isVisibleButton &&  <Basket onClose={toggleButtons}/>
    }
    </Content>
    
   </BasketProvider>
  );
}

export default App;

const Content = styled.div`
margin-top: 101px;
`

// GET /foods
// Headers: { UserID: "your_name"  } 

// GET /basket
// Headers: { UserID: "your_name"  } 

// POST /foods/:foodId/addToBasket
// BODY: { amount: number }
// Headers: { UserID: "your_name"  } 

// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  } 

// PUT /basketItem/:id/update
// BODY: { amount: number }
// Headers: { UserID: "your_name"  }