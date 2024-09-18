import React from "react";

// export async function generateStaticParams({ lng }) {
//   const { news } = await DataNew(lng)

//   return news.list.map((item, index) => ({
//     slug: item.slug,
//   }))
// }
const productDetailed = ({ params: { lng, slug } }) => {
  // const { news } = await DataNew(lng)
  // const newDetail = news.list.find((data) => data.slug === slug)
  return (
    <div>
      <p> Chi tiết sản phẩm</p>
    </div>
  );
};

export default productDetailed;
