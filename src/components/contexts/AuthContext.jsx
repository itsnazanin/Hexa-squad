import { createContext , useContext , useEffect , useState } from "react";
import { getProfileApi , loginApi , registerApi } from "@/core/services/api/auth.api";

const AuthContext = createContext(null)

export const AuthProvider = ({children}) => {
    const [ user , setUser ] = useState(null)
    const [ loading , setLoading ] = useState(true)

    const isAuthenticated = !!user

    const refreshProfile = async () => {
        try{
            const token = localStorage.getItem("accessToken")

            if(!token){
                setUser(null)
                return
            }

            const result = await getProfileApi()

            setUser(result.userProfileData)
        }catch(error){
            localStorage.removeItem("accessToken")
            setUser(null)
        }
    }

    const login = async (data) => {
        const result = await loginApi(data)

        localStorage.setItem("accessToken", result.accessToken)

        await refreshProfile()

        return result
    }

    const register = async (data) => {
        return await registerApi(data)
    }

    const logout = () => {
        localStorage.removeItem("accessToken")
        setUser(null)
    }

    useEffect(()=> {
        const initializeAuth = async () => {
            try{
                await refreshProfile()
            } finally {
                setLoading(false)
            }
        }

        initializeAuth()
    },[])


    return (
        <AuthContext.Provider value={{user, loading , isAuthenticated, login , register , logout, refreshProfile}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}