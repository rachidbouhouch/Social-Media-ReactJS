import { IUser } from '@/types/types'
import {createContext,useContext,useState,useEffect} from 'react'

export const INITTIAL_USER = {
    id:'',
    name:'',
    username:'',
    email:'',
    imageUrl:'',
    bio:''
}

export INITIAL_STATE = {
        user : INITTIAL_USER,
        isLoading: false,
        isAuthenticated: false,
        setUser : () => {},
        setIsAuthenticated: ()=>{},
        checkAuthUser:async ()=> false as boolean
}
const AuthContext= createContext<IContextType>(INITTIAL_STATE)


const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user,setUser]= useState<IUser>(INITTIAL_USER)
    const [isLoading,setIsLoading]= useState(false)
    const [isAuthenticated,setIsAuthenticated]= useState(false)
    const checkAuthUser= async ()=>  {
            try {
                const currentAccount = await getCurrentAccount();
            } catch (error) {
                return false
            }
            finally {
                setIsLoading(false)
            }
    }
    const value = {
        user,
        setUser,
        isLoading,
        isAuthenticated,
        setIsAuthenticated,
        checkAuthUser        
    }

  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
