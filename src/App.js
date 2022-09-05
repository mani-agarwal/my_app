import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import  About from "./components/About"
// import About from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";
import {BrowserRouter, Routes, Route  } from "react-router-dom";

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

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#272158";
      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = "Text Utils : Dark Mode Has Been Enabled";

      // setInterval(() => {
      //   document.title = "Long Interval "
      // }, 2000);

      // setInterval(() => {
      //  document.title = "short interval"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = "text Utils: Light Mode Has Been Enabled";
    }
  };

  return (
    <BrowserRouter>
      
            <Navbar
        title="textUtils"
        about="about TextUtils"
        mode={mode}
        toggle={toggle}
      />
      <Alert alert={alert} />

         <div className="container my-3">  
        <Routes>
          <Route exact path="about" element={<About/>} />
          <Route exact path="/" element=
            {<TextForm
              heading="Enter the Text To Analayze Below"
              showAlert={showAlert}
              mode={mode}/>} />
          
          
        </Routes>
        </div>
        </BrowserRouter>        
        
       
      
    
  );
}

export default App;
