import Contact from "@/app/components/pages/contact/Contact";
import React, { Suspense } from "react";
import DataHome from "@/app/components/pages/home/data";
import Loading from "@/app/[lng]/loading";

const ContactPage = async ({ params: { lng } }) => {
  const { contact } = await DataHome(lng);
  return <Contact lng={lng} contact={contact} />;
};

export default ContactPage;
