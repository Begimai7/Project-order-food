import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from './store/ui/uiSlice';
import {  useMemo, } from 'react';
import { createTheme,Snackbar,ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from './lib/constants/theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes/MainRoutes'

export function AppContent() {

  const snackbar = useSelector((state) => state.ui.snackbar)
  const themeMode = useSelector((state) => state.ui.themeMode)
  const dispatch = useDispatch()

 const theme = useMemo(() => {
  const currentTheme = themeMode === "light" ? { ...lightTheme} : { ...darkTheme}

  return  createTheme(currentTheme)
}, [themeMode])

  return (
   <> 
  <ThemeProvider theme={theme}>

    <Snackbar 
     isOpen={snackbar.isOpen}
     message={snackbar.message}
     severity={snackbar.severity}
     onClose={() => dispatch(uiActions.closeSnackbar())}
    />

     <MainRoutes />
     
 </ThemeProvider>     
   </>
  );
}

const App = () => {
   return(
    <Provider store={store}>
       <BrowserRouter>
       <AppContent />
       </BrowserRouter>
    </Provider>
  
   )
}

export default App;




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


