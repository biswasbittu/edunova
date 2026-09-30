import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
  <div className=''>
    <RouterProvider router={router} />,
  </div>,
)
