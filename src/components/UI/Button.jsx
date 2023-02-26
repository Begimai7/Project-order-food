import { Button as MuiButton, styled } from '@mui/material';
import React from 'react'
// import styled from 'styled-components'


export const Button = ({children, variant = "contained", borderSquare = "circle", ...rest}) => {
  return (
    <StyledButton 
    {...rest} 
    borderSquare={borderSquare}
    variant={variant}>{children}
    </StyledButton>
  )
}

// const getBackground = props => props.variant === "contained" ? "#8A2B06" : "#fff";

// const getColor = (props) => {
//   return props.variant === "contained" ? "#fff" : "#8A2B06";
// }
// const getBorder = (props) => {
//   return props.variant === "contained" ? "none" : "1px solid #8A2B06"
// }
// const getBorderRad = (props) => {
//   return props.borderSquare === "circle" ? "20px" : "6px" 
// }


const StyledButton = styled(MuiButton)(()=> ({
"&":{ fontWeight: 500,
fontSize: "16px",
lineHeight: "24px",
textAlign: "center",
color: "#fff",
backgroundColor: `#8A2B06`,
borderRadius: `20px`,
padding: "10px 32px",
display: "flex",
alignItems: "center",
},
"&:hover": {
  background: "#6d2305",
  color: "#fff"
},
"&:active": {
  background: "#993108"
}
}))
