import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./List";
import Define from "./Define";
import Add from "./Add";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/define" component={Define} />
          <Route exact path="/add" component={Add} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
