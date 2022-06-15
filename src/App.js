import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import Form from "./FORM/Form";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import InputField from "./SmallValidation/InputField";
// import Basic from "./HookForm/Basic";
import BasicPsa from "./PSA/BasicPsa";
import Contacts from "./PSA/Contacts";
import About from "./PSA/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <BasicPsa />
        <Routes>
          <Route path="/contact" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          {/* <Basic /> */}
          {/* <InputField /> */}
          {/* <Form /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
