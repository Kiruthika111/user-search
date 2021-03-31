import React, { useState } from "react";
import { Col } from "react-bootstrap";

import SearchForm from './SearchForm';

function App() {

  return (
    <>
    <h1 className="centered mt-5 mb-5">
      Github Account Details
    </h1>
    <SearchForm />
    </>
  );
};

export default App;