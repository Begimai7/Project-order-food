// import { Alert } from '@mui/material'
import { Alert, Snackbar } from '@mui/material'
import React from 'react'

export const SnackBar = ({ isOpen, onClose, autoHideDuration, message, severity}) => {
  return (
   <Snackbar
   open={isOpen}
   autoHideDuration={autoHideDuration || 4000}
   onClose={onClose}
   anchorOrigin={{ vertical: "top", horizontal: "right" }}
      // action={action}
 >
   <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
   </Alert>
 </Snackbar>
  )
}
