import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import '@/assets/index.css'
import App from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/2025-exercises/React/2025-ExpCamp-final/' : '/'}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
