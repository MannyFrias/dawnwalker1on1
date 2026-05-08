import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Shop from './Shop'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Shop />
  </StrictMode>,
)

// 1. add to cart area
// 2. have the sum of the cart