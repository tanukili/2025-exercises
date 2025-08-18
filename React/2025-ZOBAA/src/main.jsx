import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@/assets/main.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
