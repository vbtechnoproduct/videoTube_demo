import React from 'react';
import logo from './logo.svg';
import './assets/css/style.scss'
import './App.css';
import DemoPage from './component/page/DemoPage';
import Navbar from './component/Layout/Navbar';

function App() {
  return (
    <div className='mainPage'>
      <div className='row'>
        <div className='col-0 col-md-3'></div>
        <div className='col-12 col-md-6'>
          <Navbar />
          <DemoPage />
        </div>
        <div className='col-0 col-md-3'></div>
      </div>
    </div>
  );
}

export default App;
