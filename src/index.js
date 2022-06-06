import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Top from './Components/Top';
import Main from './Components/Main';
import Footer from './Components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='container'>
    <Top />
    <Main />
    <Footer />
  </div>
);

