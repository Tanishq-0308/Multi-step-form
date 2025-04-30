import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/route.jsx'
import { PlanContextProvider } from './context/PlanContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlanContextProvider>
    <RouterProvider router={router}/>
    </PlanContextProvider>
  </StrictMode>,
)
