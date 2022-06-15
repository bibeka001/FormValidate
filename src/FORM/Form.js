import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm =()=> {
    setIsSubmitted(true);
  }
  return (
    <>
      <h1>Hello</h1>
      <div>
        <span ></span>
        <div >
          {/* <img src="#" alt="spaceship" className="form-img" /> */}
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
