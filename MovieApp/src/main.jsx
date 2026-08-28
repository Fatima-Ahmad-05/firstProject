import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //use this function to create root at root div of html and render it with the tags we set inside
import {BrowserRouter} from 'react-router-dom';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  </StrictMode>
)
