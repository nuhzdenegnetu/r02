import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Stateful from "./stateful.jsx";
import Stateless from "./stateless.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stateful />
    <Stateless />
  </StrictMode>,
)
