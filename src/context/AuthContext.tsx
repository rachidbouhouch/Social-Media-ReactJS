import { getCurrentAccount } from '@/lib/appwrite/api'
import { IContextType, IUser } from '@/types/types'
import {createContext,useContext,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export const INITTIAL_USER = {
    id:'',
    name:'',
    username:'',
    email:'',
    imageUrl:'',
    bio:''
}

export const INITIAL_STATE = {
        user : INITTIAL_USER,
        isLoading: false,
        isAuthenticated: false,
        setUser : () => {},
        setIsAuthenticated: ()=>{},
        checkAuthUser:async ()=> false as boolean
}
const AuthContext= createContext<IContextType>(INITIAL_STATE)


const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user,setUser]= useState<IUser>(INITTIAL_USER)
    const [isLoading,setIsLoading]= useState(false)
    const [isAuthenticated,setIsAuthenticated]= useState(false)
    const navigate=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('cookieFallback')==='[]' || localStorage.getItem('cookieFallback')=== null) 
        navigate('/sign-in')
        checkAuthUser();
    },[])
    const checkAuthUser= async ()=>  {
            try {
                const currentAccount = await getCurrentAccount();
                if(currentAccount){
                    setUser({
                        id:currentAccount.$id,
                        username:currentAccount.username,
                        name:currentAccount.name,
                        email:currentAccount.email,
                        imageUrl:currentAccount.imageUrl,
                        bio:currentAccount.bio
                    })
                    setIsAuthenticated(true);
                    return true
                }
                return false
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


