import React, { Fragment } from "react";
import "./App.css";

//components
import InputQuote from "./components/InputQuote";
import GetQuotes from "./components/GetQuotes";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputQuote />
        <GetQuotes />
      </div>
    </Fragment>
  );
}

export default App;
