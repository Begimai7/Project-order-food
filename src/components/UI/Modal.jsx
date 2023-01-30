import { createPortal } from "react-dom";
import styled  from "styled-components";

const Backdrop = ({onClose}) => {
 return (
  <BackdropStyled>{onClose}</BackdropStyled>
 )
}

 const ModalContent = ({children}) => {
 return (
  <ModalStyled>{children}</ModalStyled>
 )
}

const backdopRoot = document.getElementById("backdrop")
const modalRoot = document.getElementById("modal-overley")

export const Modal = ({onClose, children}) => {
 return (
  <>
   { createPortal( <Backdrop onClose={onClose}/>, backdopRoot) }
   { createPortal(<ModalContent>{children}</ModalContent>, modalRoot)}
  </>

 )
}

const ModalStyled = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
  width: 40rem;
  left: calc(50% - 20rem);

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`

const BackdropStyled = styled.div`
 position: fixed;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
 width: 100vw;
 height: 100wh;
 background-color: rgba(0, 0, 0, 0.75);
 z-index: 20;
`