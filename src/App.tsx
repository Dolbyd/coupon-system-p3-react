import React from 'react';

import './App.css';
import Advertising1 from './Components/LayoutArea/Advertising1/Advertising1';
import Advertising2 from './Components/LayoutArea/Advertising2/Advertising2';
import Footer from './Components/LayoutArea/Footer/Footer';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import Menu from './Components/LayoutArea/Title/Title';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Menu/>
      <Advertising1/>
      <Main/>
      <Advertising2/>
      <Footer/>
    </div>
  );
}

export default App;
