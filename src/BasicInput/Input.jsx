import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [fullName, setFullName] = useState("");
  const [lastNameNew, setLastNameNew] = useState("");
  const onSubmits = (e) => {
    e.preventDefault();
    setFullName(name);
    setLastNameNew(lastName);
  };
  const inputEvent = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const inputEventTwo = (e) => {
    //   console.log(e.target.value);
    setLastname(e.target.value);
  };
  return (
    <div>
      <div className="main_div">
        <form onSubmit={onSubmits}>
          <div>
            <h1>
              hello {fullName} {lastNameNew}
            </h1>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={inputEvent}
              value={name}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              onChange={inputEventTwo}
              value={lastName}
            />
            {/* <input type="text" /> */}
            <button type="submit">Submit Me</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Input;
