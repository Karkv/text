import React from 'react'

function Alert(props) {

  // const capi=(word)=>{
  //   const lower=word.toLowerCase();
  //   return lower.chartAt(0).toUpperCase()+lower.slice(1);
  // }
    
  return (
    
   props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong>{props.alert.type}</strong> : {props.alert.message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>






 )
}

export default Alert
