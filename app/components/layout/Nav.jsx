import React from "react";
import LngLink from "@/app/components/functions/LngLink";
import { useTranslation } from "@/app/i18n";
const Nav = async ({ lng }) => {
  const { t } = await useTranslation(lng, "header");
  // const pathName = usePathname();
  // const currentPath = pathName.split("/")[2] || "";

  const locale = [
    {
      id: 1,
      title: t("header.our"),
      href: "",
    },
    {
      id: 2,
      title: t("header.features"),
      href: "features",
    },
    {
      id: 3,
      title: t("header.blog"),
      href: "blog",
    },
  ];
  return (
    <div>
      {React.Children.toArray(
        locale?.map((item) => (
          <LngLink
            lng={lng}
            href={`${item.href}`}
            className={`lg:text-[18px] px-2 xl:px-3  xl:mx-2  font-normal hover:text-white hover:bg-gray-500 transition ease-in-out  duration-300   
              // $
              {
                // currentPath === item.href 
              //   ? 
              //   "bg-gray-500 text-white" 
              //   : 
              //   ""}
                `}
          >
            {item.title}
          </LngLink>
        ))
      )}
    </div>
  );
};

export default Nav;
