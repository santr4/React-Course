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
import Alert from './Components/Alert';




function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=> {
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(()=> {
      setAlert(null);
    },1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#262224';
      showAlert('Dark Mode has been activated','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been activated','success');
    }
  }

  return (
    <>
      <div>
        <Navbar title="TextUtils" aboutText="Contact Us" mode={mode} toggleMode={toggleMode}/>
      </div>
      <div>
        <Alert alert={alert} />
      </div>
      <div className="container my-3">
        <TextForm row={5} text="Enter your text here" showAlert={showAlert} />
      </div>
      <br/>
      <div className="container my-3">
        <About/>
      </div>
    </>
  );
}

export default App;