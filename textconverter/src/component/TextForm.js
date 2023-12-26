import React, { useState } from "react";

export default function Text(props) {
  const [text, settext] = useState("");
  // its always use ITs is HOOKs

  const handleUpCLick = () => {
    // console.log("Uppercase was clicked")
    let nex = text.toUpperCase();
    settext(nex);
  };
  const handleclearText = () => {
    // console.log("Uppercase was clicked")
    let nex = "";
    settext(nex);
  };
  const handlelowClick=()=>{
    let nexs=text.toLowerCase();
    settext(nexs)
  }
  const handleonchange = (event) => {
    console.log("on Change");
    settext(event.target.value);
  };
  
  // Enable to dark mood 

  const [myStyle,setMyStyle]=useState({
    color:'black',
    backgroundColor:'white',

  });
// text COpy
  const handleCopy=()=>{
    var text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value)
  };
  
// Remove Extra Space

const handleExtraspace=()=>{
let newText=text.split(/[ ]+/);
settext(newText.join(" "))
};

// dark mode toggle



  const [btnTxt,setBtnTxt]=useState("Enable Dark mode")
  
  const toggleStyle=()=>{
    if (myStyle.color==='black'){
      setMyStyle({
        color:'white',
        backgroundColor:'black',
        
        border:'1px solid white'
      })
      setBtnTxt("Enable light Mode")
    }
    else{
      setMyStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnTxt("Enable Dark mode")
    }





  }
  return (
    < >
    <div style={{color:props.mode=='dark'?'white':'black'}}>
    <div className="container" >

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">
          {props.title}
        </label>
        <textarea
          className="form-control"
          onChange={handleonchange}
          value={text}
          id="mybox"
          rows="10"
          style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      {/* <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch"  id="flexSwitchCheckDefault" onClick={toggleStyle} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{btnTxt}</label>
</div> */}

      <button className="btn btn-primary" onClick={handleUpCLick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-success mx-4" onClick={handlelowClick}>Convert to lowercase </button>
      <button className="btn btn-dark mx-3 my-1" onClick={handleCopy}>copy</button>
      <button className="btn btn-dark mx-4" onClick={handleclearText}>Clear text </button>
      <button className="btn btn-dark mx-4" onClick={handleExtraspace}>Remove space </button>
      

    </div>

    <div className="Container my-3" style={{color:props.mode==='dark'?'white':'black'}}>


      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008*text.split(" ").length} minutes read </p>
      <h1>Preview</h1>
      <p>{text}</p>
      </div>


      </div>  
    </>
  );
}
