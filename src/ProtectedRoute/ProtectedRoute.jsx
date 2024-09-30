import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext} from '../Context/AuthContext'

export const ProtectedRoute = ({children}) => {

    const { user} = useContext(authContext)
    
    if (!user || !user.data || user.data.email !== 'fitogrowshop23@gmail.com') {
      return <Navigate to="/" />;
    }

    
  return (
    <>{children}</>
  )
}
