import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export async function generateMetadata({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, "home");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t: common } = await useTranslation(lng, "common");
  return {
    title: t("home") + " - " + common("home"),
  };
}

export default async function Layout({ children, params: { lng } }) {
  return <>{children}</>;
}
