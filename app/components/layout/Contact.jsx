"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HTTP_GET_DATAUSER = "http://localhost:5000";
const HTTP_DELETE_DATAUSER = "http://localhost:5000/deleteUser";

const headerTable = [
  {
    title: "Name",
  },
  {
    title: "Desc",
  },
  {
    title: "Setting",
  },
];
const Contact = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(HTTP_GET_DATAUSER)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDeleteUser = (id) => {
    axios
      .delete(`${HTTP_DELETE_DATAUSER}/${id}`)
      .then((res) => {
        console.log(res);
        setUser(user.filter((item) => item._id !== id));
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <div className="flex bg-blue-500 justify-center item-center">
        <div className="overflow-x-auto p-10">
          <div className="my-2">
            <Link href="/create" className="p-2 bg-green-500">
              Add +
            </Link>
          </div>

          <table className=" bg-white border border-gray-200">
            <thead>
               {headerTable.map((item,index) => (
                  <th key={index} className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    {item.title}
                  </th>
                  ))}
            </thead>
            <tbody className="text-black">
              {user.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    {item.desc}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex gap-2">
                    <Link
                      href={`/update/${item._id}`}
                      className="bg-red-500 p-3 font-bold"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-blue-500 p-3 font-bold"
                      onClick={() => handleDeleteUser(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contact;
