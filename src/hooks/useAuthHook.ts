import { useNavigate } from "react-router-dom"

export const useAuthHook = () =>{
    const navigate = useNavigate()
    const handleLogout = () =>{
        localStorage.clear()
        navigate('/auth/sign-in')
    }
    return handleLogout
}