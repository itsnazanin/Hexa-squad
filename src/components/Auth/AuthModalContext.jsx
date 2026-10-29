import { createContext , useContext , useState } from "react"

const AuthModalContext = createContext(null)

export const AuthModalProvider = ({ children }) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState("login")

  const openAuthModal = (initialstate = "login") => {
    setStep(initialstate)
    setIsOpen(true)
  }

  const closeAuthModal = () => {
    setIsOpen(false)
    setStep("login")
  }

  const switchStep = (nextStep) => {
    setStep(nextStep)
  }

  return (
    <AuthModalContext.Provider value={{ isOpen, step , openAuthModal , closeAuthModal, switchStep}}>
      {children}
    </AuthModalContext.Provider>  
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthModal = () => {
  const context = useContext(AuthModalContext)

  if(!context){
    throw new Error(
      "useAuthModal must be used inside AuthModalProvider"
    )
  }

  return context
}