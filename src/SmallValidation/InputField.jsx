import React, { useState } from "react";
const InputField = () => {
  const [inputList, setInputList] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);
  const inputEvent = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
  const submitDetails = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };
  const removeDetails = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
  return (
    <div className="main-content">
      <div className="row">
        <div className="col-sm-12">
          <h5 className="m5-3 mb-4 fw-bold">
            Dynamically add/remove inputs fields reactjs
          </h5>
          {inputList.map((x, i) => {
            return (
              <div className="row mb-3">
                <div className="form-group col-md-4">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Enter Your First Name"
                    onChange={(e) => inputEvent(e, i)}
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    autoComplete="off"
                    placeholder="Enter Your Last Name"
                    onChange={(e) => inputEvent(e, i)}
                  />
                </div>
                <div className="form-group col-md-2 mt-4">
                  {inputList.length !== 1 && (
                    <button
                      className="btn btn-danger"
                      onClick={() => removeDetails(i)}
                    >
                      Remove
                    </button>
                  )}
                  {inputList.length - 1 === i && (
                    <button className="btn btn-success" onClick={submitDetails}>
                      Add More
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default InputField;
