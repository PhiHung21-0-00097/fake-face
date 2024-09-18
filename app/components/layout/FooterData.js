import { useTranslation } from "@/app/i18n";
import React from "react";

const FooterData = async (lng) => {
  const { t } = await useTranslation(lng, "footer");
  const data = {
    footer: t("title"),
  };
  return data;
};

export default FooterData;
