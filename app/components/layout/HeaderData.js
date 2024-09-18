import { useTranslation } from "@/app/i18n";
import React from "react";

const HeaderData = async (lng) => {
  const { t } = await useTranslation(lng, "header");
  const data = {
    header: t('title'),
  };
  return data;
};

export default HeaderData;
