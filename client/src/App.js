/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { BrowserRouter as Router,  Route} from "react-router-dom";
import Main from "./pages/Main.js";


function App()
{
  return (
    <Router>
      <Route path="/" component={Main}/>
    </Router>
  );
};

export default App;
