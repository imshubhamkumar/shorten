import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';

function App() {
  return (
    <div title="true" className="App">
      <Navbar></Navbar>
      <Home title="true"></Home>
    </div>  
  );
}

export default App;
