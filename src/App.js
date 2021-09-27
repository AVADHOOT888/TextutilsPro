// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from './components/About';
import Alert from "./components/Alert";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      document.title="Textutils-Dark Mode"
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      document.title="Textutils-Light Mode"
    }
  };

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      
      <div className="container my-3">
        <Switch>
          <Route exact path="/">
        <Textform heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />
        </Route>
        <Route exact path="/about">
        <About mode={mode}/>
        </Route>
        
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
