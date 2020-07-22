/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router,  Route} from "react-router-dom";
import Main from "./pages/Main.js"
import Navbar from "./components/Navbar.js";



function App()
{
  return (
    <Router>
      <Navbar />
      <Route path="/" component={Main}/>
    </Router>
  );
};

export default App;
