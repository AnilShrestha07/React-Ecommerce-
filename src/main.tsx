import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/global.css"
// import HomePage from './pages/home/home.page'
import RouterConfig from './config/router.config'
import { AuthProvider } from './context/auth.context'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <RouterConfig />
    </AuthProvider>
  </StrictMode>,
)
