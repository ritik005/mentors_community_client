import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import  Navbar  from './components/Navbar/Navbar';
import Container from './components/Container/Container';

 const App = () => {
 return (
  <div>
    {/* <Router>
      <Route path="/" exact component={Navbar} />
    </Router> */}
    <Navbar />
    <Container />

  </div>
 )
}
export default App;
