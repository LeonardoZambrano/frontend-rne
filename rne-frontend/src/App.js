import React, { useState } from "react";

import './App.css';


import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Modal from './components/Modal';
import Header from "./components/Header";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <Header />
      <Navbar />
      <MainContent showModal={showModal} openModal={openModal} closeModal={closeModal} />
      <Footer />
    </div>
  );
}

export default App;
