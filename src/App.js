import React from "react";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
      </Switch>
    </div>
  );
}

export default App;
