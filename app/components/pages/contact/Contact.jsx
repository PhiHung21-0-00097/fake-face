import React from "react";

const Contact = ({ contact }) => {
  return (
    <div className="container">
      <div className="row grid-cols-12 grid justify-center items-center bg-yellow-500">
        <div className="col justify-center flex">{contact}</div>
      </div>
    </div>
  );
};

export default Contact;
