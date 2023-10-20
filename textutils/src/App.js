// import logo from './logo.svg';
// After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.
// Js is a case sensitive language.

/*
In React, "props" is short for "properties," and it refers to a mechanism for passing data from a parent component to a child component. Props are a fundamental concept in React and are used to make components more dynamic and reusable.
*/
import React, {useState} from 'react'

import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';




function App() {

  const [mode,setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262224';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <div>
      <Navbar title="TextUtils" aboutText="Contact Us" mode={mode} toggleMode={toggleMode}/>
      </div>
      <div className="container my-3">
        <TextForm row={5} text="Enter your text here" />
      </div>
      <br/>
      <div className="container my-3">
        <About/>
      </div>
    </>
  );
}

export default App;