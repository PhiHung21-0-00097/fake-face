"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/app/[lng]/loading";

function Social() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((users) => {
        setTimeout(() => {
          setIsloading(false);
          setUsers(users.data);
        }, 1000);
      })
      .then((err) => console.log(err));
  }, []);
  return (
    <div className="container my-5">
      <div className="my-3">
        <h1 className="text-[48px] font-bold">Porsche Social</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <span>
            {users.userId}
            <br />
            {users.id}
            <br />
            {users.title}
            <br />
          </span>
        )}
        {/* <Suspense fallbackLng={}>
          
        </Suspense> */}
      </div>
      <div className="relative">
        <div className="div-image">
          <div className="div-color absolute z-20"></div>
          <div className=" text-white">
            <div className="">
              <div className="p-[9%] text-left block">
                <span>
                  The required content could not be loaded. If you use an
                  AdBlocker, please check its settings.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Social;
