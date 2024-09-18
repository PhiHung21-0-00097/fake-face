import React from "react";

const Product = ({ product }) => {
  return (
    <div className="container">
      <div className="row grid-cols-12 grid justify-center items-center bg-yellow-500">
        <div className="col justify-center flex">{product}</div>
      </div>
    </div>
  );
};

export default Product;
