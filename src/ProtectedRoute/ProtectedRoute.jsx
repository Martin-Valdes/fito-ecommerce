import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext} from '../Context/AuthContext'

export const ProtectedRoute = ({children}) => {

    const { user} = useContext(authContext)
    
    console.log(user)
    if (!user || !user.data || user.data.email !== 'valdesmartin@gmail.com') {
      return <Navigate to="/" />;
    }

    
  return (
    <>{children}</>
  )
}
