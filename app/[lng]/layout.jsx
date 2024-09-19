import { dir } from "i18next";
import Footer from "@/app/components/layout/Footer";
import Headers from "@/app/components/layout/Headers";
import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import "./globals.css";
import HeaderData from "@/app/components/layout/HeaderData";
import FooterData from "@/app/components/layout/FooterData";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "home");
  return {
    title: t("Facebook"),
    //  + " - " + t("Facebook")
    icons: "/icon.ico",
  };
}

export default async function Layout({ children, params: { lng } }) {
  const { header } = await HeaderData(lng);
  const { footer } = await FooterData(lng);

  return (
    <html lang={lng} dir={dir(lng)} className={`bg-white text-black`}>
      <body className="relative">
        <Headers />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
