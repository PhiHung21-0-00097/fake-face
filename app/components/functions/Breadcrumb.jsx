import React from "react";
import LngLink from "./LngLink";
import { useTranslation } from "@/app/i18n";

const Breadcrumb = async ({ lng, pageName, breadcrumb }) => {
  const { t } = await useTranslation(lng, "header");
  return (
    <div className="to absolute bottom-full left-1/2 w-full -translate-x-1/2 bg-gradient-to-b from-transparent to-gray/75">
      <div className="my-container z-10 flex items-center justify-between">
        <h2 className="w-full bg-green px-5 py-15px font-rale text-3xl font-bold capitalize leading-snug text-white lg:w-fit lg:whitespace-nowrap lg:px-50px lg:text-[40px]">
          Home
        </h2>
        {/* Start breadcrumb */}
        <ul className="Breadcrumb hidden flex-wrap items-center pl-4 text-sm lg:flex">
          <li>
            <LngLink
              href=""
              lng={lng}
              target="_blank"
              className="font-semibold capitalize text-white"
            >
              Home1
            </LngLink>
          </li>
          {/* {React.Children.toArray(
            breadcrumb?.map((item, index) => {
              if (index === breadcrumb.length - 1) {
                return ( */}
                  <li>
                    <span className="scale-150 px-2 font-semibold text-white ">
                      /
                    </span>
                    <em className="font-bold capitalize text-orange">Home3</em>
                  </li>
                {/* );
              } else {
                return ( */}
                  <li>
                    <LngLink
                      href={item.href}
                      lng={lng}
                      className="font-semibold text-orange"
                    >
                      <span className="scale-150 px-2 font-semibold text-white">
                        /
                      </span>
                      <em>Home4</em>
                    </LngLink>
                  </li>
                {/* );
              }
            })
          )} */}
        </ul>
        {/* End breadcrumb */}
      </div>
    </div>
  );
};

export default Breadcrumb;
