import logo from "./logo.svg";
import "./App.css";
import TextForm from "./component/TextForm";
import About from "./component/About";
import React ,{useState} from "react";
import NavBar from './component/NavBar'



function App() {
  const [mode,setMode]=useState('Light');
  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
   
  return (
    <>
        <NavBar  title="TExT" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3 ">
        <TextForm heading="Convert text UpperCase"  mode={mode} toggleMode={toggleMode} title="Enter the text"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
