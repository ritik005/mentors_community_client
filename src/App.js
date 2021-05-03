import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Signin from './components/Signin/Signin';

 const App = () => {
 return (
  <Router>
    <Route path="/" exact component={Landing}/>
    <Route path="/signin" component={Signin} />
  </Router>
 )
}
export default App;
