import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({
        nombre: "luis",
        nacionalidad: "Peru"
    })
  
    const cerrarSesion = () => {
        console.log('cerrando sesion')
      };

      useEffect(() => {
        console.log('comprobando autenticacion')
      }, [])
      
  return (
    <AuthContext.Provider value={{
        auth,
        setAuth,
        cerrarSesion,
      }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;