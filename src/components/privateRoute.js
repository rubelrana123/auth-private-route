import React, { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/userContext"

export const PrivateRouter = ({children}) =>  {
  const {user,isLoading} = useContext(AuthContext);
   if(isLoading) {
     return <div>Loading.....</div>
   }
  if(user && user.uid) {
    return children;
  }
  return <Navigate to ='/login'></Navigate>


}

