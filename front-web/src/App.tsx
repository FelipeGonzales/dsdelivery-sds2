import './App.css';
import Navbar from './navbar';
import Routes from './Routes';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Routes />
    <ToastContainer />
    </>
  );
}

export default App;
