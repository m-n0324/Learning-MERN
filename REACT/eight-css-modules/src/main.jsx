import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='heading'>This is our app </h1>
    {/* 
  joh child ne yaha pr css define kari hai voh parent ne b le li 
  joh hamne main.jsx me define kiya  to over come this this we have css module so  jah par joh css chaiey bs wahi apply ho 
*/}

    <App /> 
  </StrictMode>,
)
