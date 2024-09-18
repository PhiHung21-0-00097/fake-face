import React from "react";

const HomePage = ({ pagehome }) => {
  return (
    <div className="container">
      <div className="row grid-cols-12 grid justify-center items-center flex bg-yellow-500">
        <div className="col">{pagehome}</div>
      </div>
    </div>
  );
};

export default HomePage;
