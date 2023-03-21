import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css";
import Header from '../src/pages/Header'
import LeftsideContent from './components/Leftsidecontent';
import RightsideContent from './components/Rightsidecontent';
import About from './pages/about';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Header />
    <LeftsideContent />
    <RightsideContent />
    <div className=' max-w-6xl mx-auto px-6'>
    <About />
    </div>
    
  </React.StrictMode>
)
