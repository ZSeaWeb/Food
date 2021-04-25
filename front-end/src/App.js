import React from 'react';
import './App.css';
import Main from './components/main/Main';
import Home from "./components/home/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/home" exact={true}>
          <div className={"App"}>
            <Home></Home>
          </div>
        </Route>

        <Route path="/" exact={true}>
          <div className={"App"}>
            <Home></Home>
          </div>
        </Route>

        <Route path="/login" exact={true}>
          <div className={"App"}>
            <Main></Main>
          </div>
        </Route>

      </Router>
    </div>
  );
}

export default App;
