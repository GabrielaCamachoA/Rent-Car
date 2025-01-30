import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ModoDark from './context/ModoDark.jsx'
import InfoContext from './context/InfoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InfoContext>
    <ModoDark>
      <App />
    </ModoDark>
    </InfoContext>
  </StrictMode>,
)
