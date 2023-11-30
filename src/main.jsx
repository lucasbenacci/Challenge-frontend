import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Job from './components/ComponentJob.jsx'
import './index.css';
import NikeLogo from './assets/Nike.jpg'
import AdidasLogo from './assets/Adidas.png'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="main">
    <Job 
      logo={NikeLogo}
      title="Nike"
      subtitle="Ali"
      description=""
      salary="2500.00"
    />
    <Job 
      logo={AdidasLogo}
      title="Adidas"
      subtitle="Aqui"
      description=""
      salary="3500.00"
    />
    </div>
  </React.StrictMode>,
)
