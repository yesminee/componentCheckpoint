import React from 'react';
//import Clock from './Components/Clock/clock'
import Footer from './Components/Profile/footer';
import Header from "./Components/Profile/header";
import Pic from "./Components/Profile/ProfilPhoto";
import FullName from "./Components/Profile/FullName";
import Adress from "./Components/Profile/Adress";

import './App.css';


function App() {
  return (
    <>
    <Header/>
    <Pic />
    <FullName />
    <Adress />
    <Footer />
    </>
  );
}

export default App;
