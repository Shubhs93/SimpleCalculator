import React from "react";

const Button =(props)=> {
  var isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

    return( 
      <div 
        className={`button ${isOperator(props.children) ? "" : "operator"}`}
        onClick={()=>{props.handleClick(props.children)}}>
        {props.children}
      </div>
    )
  
}

export default Button;