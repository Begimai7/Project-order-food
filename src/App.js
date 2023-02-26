import './App.css';
import { Header } from "./components/header/Header"
import { Summery } from "./components/summery/Summery"
import  Meals  from "./components/meal/Meal"
import { Basket } from "./components/basket/Basket"
import styled from 'styled-components';
import { useFoods } from './hooks/useFoods';
import { SnackBar } from './components/UI/SnackBar';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui/uiSlice';
import { useCallback, useState } from 'react';
import { MenuItem, Select } from '@mui/material';

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

const OPTIONS = [
  {value: "ASC", label: "Cheaper"},
  {value: "DESC", label: "More Expensive"}
]

function App() {
const [isBasketVisible, setBasketVisible] = useState(false)
  const {meals, sortDirection, changeSortDirection, isLoading, error} = useFoods()

  const snackbar = useSelector((state) => state.ui.snackbar)
  const dispatch = useDispatch()

const clickHandler = useCallback(() => {
  setBasketVisible((prevS) => !prevS)
},[isBasketVisible])


//  const clickHandler = () => {
//   dispatch(modalActions.openModal())
//  }

  return (
   <> 
    <Header openBasket={clickHandler}/>
    <Content >
    <Summery />
   
    <StyledSelect
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sortDirection}
    label="Age"
    onChange={(e) => changeSortDirection(e.target.value)}
  >
    {
      OPTIONS.map((item) => (
         <MenuItem value={item.value}>{item.label}</MenuItem>
      ))
    }
   
  </StyledSelect>

    <Meals meals={meals} isLoading={isLoading} error={error}/>

    {
      isBasketVisible &&  <Basket onClose={clickHandler}/>
    }
    </Content>

    <SnackBar 
     isOpen={snackbar.isOpen}
     message={snackbar.message}
     severity={snackbar.severity}
     onClose={() => dispatch(uiActions.closeSnackbar())}
    />
   </>
  );
}

export default App;

// const Content = styled.div`
// margin-top: 101px;
// `

const Content = styled("div")(()=> ({
  marginTop: "101px;"
}))

const StyledSelect = styled(Select)(()=> ({
  "&": {
    backgroundColor: "#fff"
  }
}))

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