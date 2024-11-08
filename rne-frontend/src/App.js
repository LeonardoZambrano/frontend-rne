import React, { useState } from "react";

import './App.css';


import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
