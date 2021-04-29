import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Navbar  from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

 const App = () => {
 return (
  <div>
    <Navbar />
    <Container />
    <Services />
    <Footer />

  </div>
 )
}
export default App;
