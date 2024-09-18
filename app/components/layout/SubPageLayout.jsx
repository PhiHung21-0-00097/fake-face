import React from "react";
import SubPageBanner from "@/app/components/layout/SubPageLayout";
import Breadcrumb from "@/app/components/functions/Breadcrumb";

const SubPageLayout = ({ children, lng, img, pageName, breadcrumb }) => {
  return (
    <main>
      <SubPageLayout />
      <div className="mt-bannerMobile lg:mt-bannerDesktop relative z-10">
        <Breadcrumb lng={lng} />
        {children}
      </div>
    </main>
  );
};

export default SubPageLayout;
