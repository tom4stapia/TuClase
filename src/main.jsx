import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import Routing from './routing';
import Navbar from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <Routing />
  </React.StrictMode>,
)
