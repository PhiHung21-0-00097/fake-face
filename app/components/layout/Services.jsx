import React from "react";
import { s1 } from "@/public/image/services";
import Image from "next/image";
import { i1, i2, i3, i4 } from "@/public/image/banner";
const Services = ({ lng }) => {
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
  ];
  const infoService = [
    {
      title: "Thiết kế UX/UI",
    },
    {
      title: "Công cu hỗ trợ thương mại điện tử",
    },
    {
      title: "Phát triển website",
    },
    {
      title: "Sản xuất TVC",
    },
    {
      title: "Biên tạp nội dung website",
    },
    {
      title: "Product concept shooting",
    },
    {
      title: "Ứng dụng di động",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="row grid grid-cols-12 gap-2">
          <div className="col col-span-12 lg:col-span-6 lg:order-1 order-2 justify-center items-center flex">
            <div className="">
              <Image src={s1} alt="" className="" />
            </div>
          </div>
          <div className="col col-span-12 lg:col-span-6 justify-center items-center flex">
            <div className="">
              <h1 className="font-bold text-[36px] text-barlow ">
                DỊCH VỤ CUNG CẤP
              </h1>
              <p className="text-[20px] font-light">
                Tại Trạm Thiết Kế, con người luôn là tài sản được đánh giá cao
                nhất. Chúng tôi luôn tìm kiếm và xây dựng một văn hóa làm việc
                dựa trên sự đam mê, chia sẻ, yêu thương, tôn trọng và tinh thần
                trách nhiệm cao trong công việc
              </p>
              <div className="grid grid-cols-4 gap-2">
                {bannerImage.map((item, index) => (
                  <div key={index} className="col-span-1 justify-center">
                    <Image src={item.image} alt="" className="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row grid grid-cols-12 gap-2">
          <div className="col col-span-12 lg:col-span-6 justify-center items-center flex">
            <div className="">
              <h1 className="font-bold text-[36px] text-barlow ">
                DỊCH VỤ CUNG CẤP
              </h1>
              <p className="text-[24px]">Dịch Vụ Truyền Thông</p>
              <span className="flex gap-1 mb-[1rem]">
                <p className="w-[55px] h-[3px] bg-[#332978] text-[#332978]"></p>
                <p className="w-[55px] h-[3px] bg-[#F15A22] text-[#F15A22]"></p>
                <p className="w-[55px] h-[3px] bg-[#332978] text-[#332978]"></p>
                <p className="w-[55px] h-[3px] bg-[#332978] text-[#332978]"></p>
              </span>
              <div>
                <div className="row grid grid-cols-12">
                  {infoService.map((item, index) => (
                    <div key={index} className="col col-span-6">
                      <span>
                        <p className="pBefore">{item.title}</p>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 ">
                {bannerImage.map((item, index) => (
                  <div key={index} className="col-span-1 ">
                    <Image src={item.image} alt="" className="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col col-span-12 lg:col-span-6 justify-end flex">
            <div className="">
              <Image src={s1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
