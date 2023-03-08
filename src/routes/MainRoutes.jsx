import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserLayout } from '../layout/UserLayout'
import { MealsPage } from '../pages/MealsPage'
import { SignInPages } from '../pages/SignInPages'
import { SignUpPages } from '../pages/SignUpPages'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={ <UserLayout />}>
        <Route index element={ < MealsPage />} />
        <Route path='signup' element={ <SignUpPages />} />
        <Route path='signin' element={ <SignInPages />} />
      </Route>
    </Routes>
  )
}
