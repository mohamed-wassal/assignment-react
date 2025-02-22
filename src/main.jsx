
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HeroUIProvider} from "@heroui/react";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { StrictMode } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <HeroUIProvider>
    <App />
    </HeroUIProvider>
    </StrictMode>
)
