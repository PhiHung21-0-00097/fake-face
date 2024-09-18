import React from "react";
import TabsUser from "@/app/components/layout/TabsUser";
const Portfolio = ({ lng }) => {
  return (
    <div className="container">
      <div className="row flex flex-wrap text-center justify-center">
        <h1 className="text-[26px] font-bold">HỒ SƠ NĂNG LỰC</h1>
        <p className="text-[20px]">
          Tại Trạm Thiết Kế, con người luôn là tài sản được đánh giá cao nhất.
          Chúng tôi luôn tìm kiếm và xây dựng một văn hóa làm việc dựa trên sự
          đam mê, chia sẻ, yêu thương, tôn trọng và tinh thần trách nhiệm cao
          trong công việc
        </p>
        <div>
          <TabsUser lng={lng}/>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Portfolio;
