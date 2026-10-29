import "./i18n";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthModalProvider } from "./components/Auth/AuthModalContext";



createRoot(document.getElementById('root')).render(
  <AuthModalProvider>
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </AuthModalProvider>

   
)
