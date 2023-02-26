import { DialogActions, DialogContent , DialogContentText } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import styledComponents from 'styled-components'
import { deleteBasketItem, submitOrder, updateBasketItem } from '../../store/basket/basketSlice'
import { uiActions } from '../../store/ui/uiSlice'
import { Modal } from '../UI/Modal'
import { BasketItem } from './BasketItem'
import { TotalAmount } from './TotalAmount'


export const Basket = ({onClose}) => {

const dispatch = useDispatch()
const  items = useSelector((state) => state.basket.items)
const getTotalPrice = () => {
  return items.reduce((sum, {amount, price}) => sum + price * amount, 0)
}

const decrementAmount = (id, amount) => {
 if(amount > 1){
   dispatch(updateBasketItem({amount: amount - 1, id}))
 }else{
  dispatch(deleteBasketItem(id))
 }
}
const incrementAmount = (id, amount) => {
  dispatch(updateBasketItem({amount: amount + 1, id}))
}
// ------------MUI-----------------------------------------------------

const submitOrderHandler = async () => {
  try{
     await dispatch(submitOrder({orderData: {items},  
  })).unwrap();
  dispatch(uiActions.showSnackbar({  
    message: "Success", 
    severity: "success"
  }))
 }catch(error) {
  dispatch(uiActions.showSnackbar({ 
    message: "Order failed", 
    severity: "error"
  })
  )}finally{
    onClose()
  }
}
  return (
     <Modal>
      
      <ModalContainer>
     <DialogContent>
      <DialogContentText id="alert-dialog-description">
      {
        items.length ? <MapItems>
       {
        items.map((elem) => (
          <BasketItem 
          key={elem._id}
          title={elem.title}
          price= {elem.price}
          amount = {elem.amount}
          decrementAmount={() => decrementAmount(elem._id, elem.amount)}
          incrementAmount={() => incrementAmount(elem._id, elem.amount)}
      />
        ))}
    </MapItems> : null
      }
      </DialogContentText>     
    </DialogContent>


     <DialogActions>
         
       {/* <StyledTotalAmount>  */}
       <TotalAmount
        price={getTotalPrice()}
        onClose ={onClose}
        onOrder ={submitOrderHandler}
       /> 
      {/* </StyledTotalAmount>  */}
    </DialogActions> 

  </ModalContainer>
    </Modal>
   
  )
}


// const StyledTotalAmount = styledComponents.div`
//   padding: 0 0.5rem 0.5rem;
// `
const MapItems = styledComponents.div`
 max-height: 228px;
 overflow-y: scroll;
`
const  ModalContainer = styledComponents.div`
  padding: 0.5rem 1rem;
  width: 100%;
`

// const DialogContent = styled(MuiDialogContent)(()=> ({
//   width: "40rem",
// }))


