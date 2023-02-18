import './App.css';
import { Header } from "./components/header/Header"
import { Summery } from "./components/summery/Summery"
import  Meals  from "./components/meal/Meal"
import { Basket } from "./components/basket/Basket"
import styled from 'styled-components';
import { useCallback, useState } from 'react';
import { useFoods } from './hooks/useFoods';


// const DUMMY_MEALS = [
//   {
//     id: "meal1",
//     title: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99
//   },
//   {
//     id: "meal2",
//     title: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.00
//   },
//   {
//     id: "meal3",
//     title: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99
//   },
//   {
//     id: "meal4",
//     title: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 19.99
//   }
// ]

function App() {
const [isBasketVisible, setBasketVisible] = useState(false)
// const [sortDirection, setSortDirection] = useState(false)
  const {meals, sortDirection, changeSortDirection, isLoading, error} = useFoods()

const clickHandler = useCallback(() => {
  setBasketVisible((prevS) => !prevS)
},[isBasketVisible])

  return (
   <> 
    <Header openBasket={clickHandler}/>
    <Content>
    <Summery />
   
   <select 
    onChange={(e) => changeSortDirection(e.target.value)}
    value={sortDirection}
    >
    <option value="ASC">cheaper</option>
    <option value='DESC'>more expensive</option>
   </select>

    <Meals meals={meals} isLoading={isLoading} error={error}/>

    {
      isBasketVisible &&  <Basket onClose={clickHandler}/>
    }
    </Content>
    
   </>
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