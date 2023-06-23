import React from 'react';
import ReactDOM from 'react-dom/client';
import QRCodeGenerator from './components/QrCode';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container mx-auto p-4 flex flex-col justify-center items-center h-screen overflow-hidden">
      <div className="w-96 h-80 flex flex-col justify-center shadow-xl bg-white rounded-xl">
        <QRCodeGenerator />
      </div>
    </div>
  </React.StrictMode>,
)