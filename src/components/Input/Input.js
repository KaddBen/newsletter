import React, { useState, useEffect } from "react";
import './Input.scss'
const Input = (props) => {
  const [focused, setFocused] = useState(false);
  let [errorMsg, setErrorMsg] = useState("");
  let [className, setClassName] = useState("");
  useEffect(() => {
    if (props.type === "text") setErrorMsg("Veuillez entrer un mail valide");
    if((props.value.length === 0)) setErrorMsg("Ce champ ne peut être vide");
  }, [className, errorMsg, props.type, props.value]);

  const handleFocus = () => {
    setFocused(true);
    props.value === "" ? setClassName("block") : setClassName("");
    console.log(className)
  };
 
  return (
    <div className="input_container"> 
      <input
        className="email_input"
        type={props.type}
        id={props.id}
        pattern={props.pattern}
        onBlur={handleFocus}
        onChange={props.onChange}
        focused={focused.toString()}
        value={props.value}
      />
    <div className="error_container">
    <span className='email_address'>Email address</span>
    <span className={'error_msg ' + className}>{errorMsg}</span>
    </div>    
    </div>
  );
};

export default Input;
