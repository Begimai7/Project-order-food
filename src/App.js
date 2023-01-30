import './App.css';
import { Header } from "./components/header/Header"
import { Summery } from "./components/summery/Summery"
import { Meals } from "./components/meal/Meal"
import { Basket } from "./components/basket/Basket"
import styled from 'styled-components';

function App() {
  return (
   <div>
    <Header/>
    <Content>
    <Summery />
    <Meals />
    <Basket />
    </Content>
    
   </div>
  );
}

export default App;

const Content = styled.div`
margin-top: 101px;
`