"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LngSwitcher = () => {
  const pathName = usePathname();
  const redirectPathName = (locale) => {
    if (!pathName) {
      return "/";
    }
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const currentLang = pathName.split("/")[1];
  const secondLang = currentLang === "vi" ? "en" : "vi";

  return (
    <>
      <Link
        href={redirectPathName("en")}
        className={`px-2 text-sm font-bold hover:text-white hover:bg-gray-500 ${currentLang === "en" && "text-white bg-gray-500"}`}
      >
        EN
      </Link>

      <Link
        href={redirectPathName("vi")}
        className={`px-2 text-sm font-bold hover:text-white hover:bg-gray-500  ${currentLang === "vi" && "text-white bg-gray-500"}`}
      >
        VI
      </Link>
    </>
  );
};

export default LngSwitcher;
