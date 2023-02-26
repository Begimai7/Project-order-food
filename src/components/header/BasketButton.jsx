import { Button, styled } from '@mui/material'
import React from 'react'
import styledComponents from 'styled-components'
import {ReactComponent as BasketIcon} from "../../assets/icons/basket-icon.svg" 


export const BasketButton = ({count , onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      <BasketIcon />
         <StyledTitle>Your Card</StyledTitle>
         <StyledCounter>{count || 0}</StyledCounter>
      </StyledButton>
  )
}

const StyledButton = styled(Button)(({ theme })=> ({
"&": {
fontWeight: 600,
fontSize: "16px",
lineHeight: "24px",
textAlign: "center",
color: theme.palette.primary.contrastText,
padding: "12px 32px",
background: theme.palette.primary.dark,
borderRadius: "30px",
border: "none",
display: "flex",
alignItems: "center",
marginLeft: "10px",

},
"&:hover": {
  background: theme.palette.primary.light,
  color: theme.palette.primary.contrastText
},
"& .bump": {
  animation: "bump 300ms ease-out"
},
// "@keyframes bump" {
  
//   0% {
//     transform: scale(1),
//   }
//  10% {
//     transform: scale(0.9),
//   }
//   30%{
//     transform: scale(1.1),
//   }
//   50% {
//     transform: scale(1.15),
//   }
//   100%{
//     transform: scale(1),
// }
}))

// const StyledButton2 = styledComponents.button`
// font-weight: 600;
// font-size: 16px;
// line-height: 24px;
// text-align: center;
// color: #FFFFFF;
// padding: 12px 32px;
// background: #5A1F08;
// border-radius: 30px;
// border: none;
// display: flex;
// align-items: center;
// :hover{
//  background-color: #2c0d00;
// }

// &.bump {
//   animation: bump 300ms ease-out;
// }

// @keyframes bump {
//   0% {
//     transform: scale(1);
//   }
//   10% {
//     transform: scale(0.9);
//   }
//   30% {
//     transform: scale(1.1);
//   }
//   50% {
//     transform: scale(1.15);
//   }
//   100% {
//     transform: scale(1);
//   }
// }

// `
const StyledTitle = styledComponents.span`
padding-left: 14px;
padding-right: 24px;
`
const StyledCounter = styled("span")(({ theme })=> ({
  background: theme.palette.primary.main,
  borderRadius: "30px",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: "27px",
  color: theme.palette.primary.contrastText,
  padding: "4px 20px",

}))