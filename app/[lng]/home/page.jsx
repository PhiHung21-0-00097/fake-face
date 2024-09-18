import React from "react";
import DataHome from "@/app/components/pages/home/data";
import Banner from "@/app/components/layout/Banner";
import Models from "@/app/components/layout/Models";
import Social from "@/app/components/layout/Social";
const PageHome = async ({ params: { lng } }) => {
  const { pagehome } = await DataHome(lng);
  return (
    <div>
      <Banner />
      <Models />
      <Social />
    </div>
  );
};

export default PageHome;
