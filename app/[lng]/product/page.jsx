import Product from "@/app/components/pages/product/Product";
import { useTranslation } from "@/app/i18n";
import React from "react";
import DataHome from "@/app/components/pages/home/data";

const ProductPage = async ({ params: { lng } }) => {
  const { product } = await DataHome(lng);
  return <Product lng={lng} product={product} />;
};

export default ProductPage;
