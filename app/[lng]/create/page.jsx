"use client";
import React, { useState } from "react";
import axios from "axios";

const HTTP_CREATE_USER = "http://localhost:5000/createUser";

const CreateUser = () => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    axios
      .post(HTTP_CREATE_USER, { name, desc })
      .then((res) => console.log(res), (window.location.href = "/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="flex bg-blue-500 justify-center item-center">
        <div className="w-1/2 bg-white rounded-md p-3 m-5">
          <form action="" onSubmit={handleCreateSubmit}>
            <h2>Add User</h2>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Desc
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter Desc"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button className="p-3 bg-green-500">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
