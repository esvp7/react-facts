import React, { useState } from "react";
import Page from './Components/Page';
import Nav from './Nav';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div className="App">
      <Nav 
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode}/>
      <Page darkMode={darkMode}/>
    </div>
  );
}

export default App;
