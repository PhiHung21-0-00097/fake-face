"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const HTTP_GET_DATAUSER = "http://localhost:5000";
const HTTP_PUT_DATAUSER = "http://localhost:5000/updateUser";

const UpdateUser = ({ params: { id } }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`${HTTP_GET_DATAUSER}/${id}`)
        .then((res) => {
          console.log(res);
          setName(res.data?.name);
          setDesc(res.data?.desc);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    axios
      .put(`${HTTP_PUT_DATAUSER}/${id}`, { name, desc })
      .then((res) => res, (window.location.href = "/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="flex bg-blue-500 justify-center item-center">
        <div className="w-1/2 bg-white rounded-md p-3 m-5">
          <form action="" onSubmit={handleUpdateUser}>
            <h2>Update User</h2>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Desc
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none focus:shadow-outline"
                placeholder="Enter Desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button className="p-3 bg-green-500">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
