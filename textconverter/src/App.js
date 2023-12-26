import logo from "./logo.svg";
import "./App.css";
import TextForm from "./component/TextForm";
import About from "./component/About";
import React ,{useState} from "react";
import NavBar from './component/NavBar'
import Alert from "./component/Alert";



function App() {



const [alert,setAlert]=useState();

const viewAlert=(message,type)=>{
  setAlert({
    message:message,
    type:type
  })
};



  const [mode,setMode]=useState('light');
  // const showAlert=( )

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='gray';
      viewAlert("Dark mode has been enabled" , "success");

    }
    else{
      setMode('light');

      document.body.style.backgroundColor='white';
      viewAlert("Light mode has been enabled","success");
      // document.style.color='black'
    }
  }
   
  return (
    <>
        <NavBar  title="TExT" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
      <div className="container my-3 ">
        <TextForm heading="Convert text UpperCase" viewAlert={viewAlert}  mode={mode} toggleMode={toggleMode} title="Enter the text"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
