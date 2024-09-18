import PageHome from "@/app/components/layout/HomePage";
import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import DataHome from "@/app/components/pages/home/data";

export default async function Home() {
  // if (languages.indexOf(lng) < 0) lng = fallbackLng;
  // const { t } = await useTranslation(lng, "home");
  const { pagehome } = await DataHome("home");
  return (
    <main className="">
      <div className="">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim eaque,
        dolores aliquid itaque eveniet quidem rerum dolore, aspernatur
        necessitatibus eos eligendi quod doloribus. Molestias accusamus
        similique voluptas ratione sit repellendus!
      </div>
    </main>
  );
}
