// import HomeBanner from '../components/banners/HomeBanner'
// import Button from '../components/functions/Button'
import HomeData from "@/app/components/pages/home/data";
// import ProductSlide from '../components/pages/home/ProductSlide'
// import Recruit from '../components/pages/home/Recruit'
import { useTranslation } from "@/app/i18n";
import { fallbackLng, languages } from "@/app/i18n/settings";
import Banner from "@/app/components/layout/Banner";
import Services from "@/app/components/layout/Services";
import Portfolio from "@/app/components/layout/Portfolio";
import Partner from "@/app/components/layout/Partner";
import Contact from "@/app/components/layout/Contact";
export default async function Home({ params: { lng } }) {
  if (languages.indexOf(lng) < 0) lng = fallbackLng;
  const { t } = await useTranslation(lng, "common");
  const { banner } = await HomeData(lng);

  return (
    <main>
      <Banner lng={lng} banner={banner} />
      {/* <section className="py-5">
        <Services lng={lng} />
      </section>
      <section className="py-5 bg-[#F1F3F8]">
        <Portfolio lng={lng} />
      </section>
      <section className="py-5">
        <Partner lng={lng} />
      </section>{" "}
      <section className="py-5">
        <Contact lng={lng} />
      </section> */}
    </main>
  );
}
