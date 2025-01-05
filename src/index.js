import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nothing from './Nothing'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './utils/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router> 
      <Routes>
       
        <Route path="/guest/:id" element={<App />} />
        <Route path="*" element={<Nothing/>} /> 

      </Routes>
    </Router>
   
  </React.StrictMode>
);

reportWebVitals(console.log);
