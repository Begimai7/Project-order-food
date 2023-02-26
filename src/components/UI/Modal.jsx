import { Dialog, DialogContent, DialogContentText,  DialogTitle, styled, DialogActions, Button } from "@mui/material";
import { createPortal } from "react-dom";
import styledComponents  from "styled-components";

const Backdrop = ({onClose}) => {
 return (
  <BackdropStyled>{onClose}</BackdropStyled>
 )
}

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// }
//  const ModalContent = ({children, isOpen, onClose, }) => {
//  return (
//   <ModalStyled>
//    {children}
//   </ModalStyled>
//  )
// }

export const ModalContent = ({children, isOpen, onClose, title}) => {
  return(
    <Dialog
    open={true}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
   {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
{/* 
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
        
        <DialogActions>
            {children}
        </DialogActions> */}
         {children}
  </Dialog>
  )
}

const backdopRoot = document.getElementById("backdrop")
const modalRoot = document.getElementById("modal-overley")

export const Modal = ({onClose, children, isOpen, title}) => {
 return (
  <>
   { createPortal( <Backdrop onClose={onClose}/>, backdopRoot) }
   { createPortal(<ModalContent title={title} onClose={onClose} isOpen={isOpen}>{children}</ModalContent>, modalRoot)}
  </>

 )
}


// const Dialog = styled(MuiDialog)(()=> ({
//   position: "fixed",
//   top: "20vh",
//   // left: "5%",
//   // width: "90%",
//   backgroundColor: "white",
//   // padding: "1rem",
//   borderRadius: "14px",
//   boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
//   zIndex: "30",
//   animation: "slide-down 300ms ease-out forwards",
//   width: "30rem",
//   left: "calc(50% - 20rem)",

// "@keyframes slide-down":{
//   "from": {
//     opacity: "0",
//     transform: "translateY(-3rem",
//   },
//   "to": {
//     opacity: "1",
//     transform: "translateY(0)"
//   },
// }
// }))

const BackdropStyled = styledComponents.div`
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