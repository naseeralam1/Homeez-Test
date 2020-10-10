import React, { Fragment, useState } from "react";

const InputQuote = () => {
  const [quotation_Info, setQuotationInfo] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { quotation_Info };
      const response = await fetch("http://localhost:5000/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Quotation List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={quotation_Info}
          onChange={(e) => setQuotationInfo(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputQuote;
