import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import "./assets/scss/style.scss";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={LandingPage} exact></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
