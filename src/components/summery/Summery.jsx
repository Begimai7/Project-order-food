import React from 'react'
import styled from 'styled-components'
import BackgroundImg from "../../assets/images/summery-background.jpg"
import { SummerInfoCard } from './SummerInfoCard'

export const Summery = () => {
  return (
    <Container>
     <StyledImg src={BackgroundImg} alt="summery"/>
     <SummerInfoCard/>
    </Container>
  )
}
const Container = styled.div`
height: 527px;
`
const StyledImg = styled.img`
height: 432px;
width: 100%;
`