// import logo from './logo.svg';
// After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects

/*
In React, "props" is short for "properties," and it refers to a mechanism for passing data from a parent component to a child component. Props are a fundamental concept in React and are used to make components more dynamic and reusable.
*/

import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import User from './Other/User';


const Name = "aaranyak santra";


function App() {
  function formatName(user){
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Aaranyak',
    lastName: 'Santra'
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <br />
      <div className="container">
        <TextForm row={5} text="Enter your text here" />
      </div>
      <div className="hello_name">
        <h1>Hello! {Name}</h1>;
      </div>
      <div className="format_name">
          <h1>
            hello, {formatName(user)}
          </h1>
      </div>
      <div>
        <User user={user}/>
      </div>
    </>
  );
}

export default App;