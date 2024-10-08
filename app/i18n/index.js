import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "@/app/i18n/settings";

const initI18next = async (lng, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

export async function useTranslation(lng, ns, { keyPrefix } = {}) {
  const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? ns : [ns]);
  return {
    t: i18nextInstance.getFixedT(lng, ns, keyPrefix),
    i18n: i18nextInstance,
  };
}
