import React from "react";
import p1 from "@/public/image/p1.webp";
import Image from "next/image";
import Link from "next/link";
const Models = () => {
  return (
    <div className="my-5">
      <div className="my-3 container">
        <h1 className="text-[48px] font-bold">Models</h1>
      </div>
      <div className="grid-cols-12 grid">
        <div className="col-span-4 relative">
          <Image src={p1} alt="" />
          <div className="absolute bg-product h-auto top-0 z-10 right-0 left-0 bottom-0"></div>
          <div className="absolute pt-[20px] px-[40px] pb-[40px] left-0 top-0 right-0 bottom-0">
            <div className="flex flex-col justify-between relative h-full w-full z-20 text-white">
              <div className="font-bold">
                <div className=" text-[38px]">
                  <span>Mazda 3</span>
                </div>
                <div className="text-[20px]">from VND 3.850.000.000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <Image src={p1} alt="" />  
        </div>
        <div className="col-span-4">
          <Image src={p1} alt="" />
        </div>
        <div className="col-span-4">
          <Image src={p1} alt="" />
        </div>
        <div className="col-span-4">
          <Image src={p1} alt="" />
        </div>
        <div className="col-span-4">
          <Image src={p1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Models;
