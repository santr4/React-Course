// import logo from './logo.svg';

/*
In React, "props" is short for "properties," and it refers to a mechanism for passing data from a parent component to a child component. Props are a fundamental concept in React and are used to make components more dynamic and reusable.
*/

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';



function App() {
  return (
    <>
      <Navbar title="|TextUtils|" aboutText="About Us" />
      <TextForm row={10} col={10} />
    </>
  );
}

export default App;