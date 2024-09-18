import { useTranslation } from "@/app/i18n";

const DataHome = async (lng) => {
  const { t } = await useTranslation(lng, "home");

  const data = {
    pagehome: t("pagehome"),
    banner: t("banner"),
    product: t("product"),
    contact: t("contact"),
  };
  return data;
};

export default DataHome;
