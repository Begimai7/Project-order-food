import styledComponents from 'styled-components'
import { Button as MuiButton, styled } from '@mui/material'

export const BasketItem = ({title, price, amount, decrementAmount, incrementAmount}) => {

  return (
    <Container>
     <FoodName>{title}</FoodName>

     <Content>
     <PriceAndAmountContainer>
      <Price>${price}</Price>
      <Amount>x{amount}</Amount>
     </PriceAndAmountContainer>

     <ButtonsContainer>
      <StyledButton  onClick={decrementAmount}> - </StyledButton>
      <StyledButton  onClick={incrementAmount}> +</StyledButton>
     </ButtonsContainer>

     </Content>
      
    </Container>
  )
}
const Container = styledComponents.div`
 padding: 24px 0;
`
const FoodName = styledComponents.p`
 font-weight: 600;
font-size: 20px;
line-height: 30px;
color: #222222;
margin: 0 0 12px 0;
`
const Price = styledComponents.p`
font-weight: 600;
font-size: 18px;
line-height: 27px;
color: #AD5502;
margin: 0;
`
const Amount = styledComponents.span`
border: 1px solid #D6D6D6;
border-radius: 6px;
padding: 6px 14px;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #222222;
display: block;

`
const Content = styledComponents.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const PriceAndAmountContainer = styledComponents.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 153px;
 margin-right: 8rem;
`
const ButtonsContainer = styledComponents.div`
 display: flex;
 gap: 14px;
`

const StyledButton = styled(MuiButton)(()=> ({
  "&":{ 
  fontSize: "18px",
  fontWeight: "600",
  lineHeight: "24px",
  textAlign: "center",
  color: "#7E2A0A",
  borderRadius: `6px`,
  border:  "1px solid #8A2B06",
  padding: "10px 32px",
  display: "flex",
  alignItems: "center",
  },
  "&:hover": {
    backgroundColor: "#973d19",
    color: "#fff"
  },
  "& :active": {
    background: "#993108"
  }
  }))

// <Button borderSquare='square' variant='outline' onClick={decrementAmount}> - </Button>