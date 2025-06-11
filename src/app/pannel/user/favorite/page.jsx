import Empty from "@/components/pannel/user/favorite/Empty.compoent";
import ProductBox from "@/components/pannel/user/favorite/ProductBox.compoent";
import SectionTitle from "@/components/shared/section-title/SectionTitle.component";
import React from "react";

function page() {
  //TODO:mockData
  const products = [
    {
      title: "برگ ۸ نخی کاپیتان بلک شکلاتی (طرح جدید)",
      rate: 4,
      price: 160_000,
      image: "/images/sigar1.jpg",
    },
    {
      title: "اسکار شکلاتی",
      rate: 3,
      price: 100_000,
      image: "/images/sigar2.jpg",
    },
    {
      title: "میلانو قهوه",
      rate: 5,
      price: 65_000,
      image: "/images/sigar3.jpg",
    },
    {
      title: "وینستون قرمز",
      rate: 2,
      price: 50_000,
      image: "/images/sigar4.jpg",
    },
    {
      title: "کمل مشکی",
      rate: 5,
      price: 45_000,
      image: "/images/sigar5.jpg",
    },
    {
      title: "کمل ابی",
      rate: 4,
      price: 36_000,
      image: "/images/sigar1.jpg",
    },
  ];

  return (
    <div className="w-full  min-h-[600px] select-none">
      <SectionTitle title="علاقه مندی ها" />
      <div className="w-full flex items-center gap-3 flex-wrap">
        {products.length ? (
          products.map((item) => (
            <ProductBox
              key={item.title}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          ))
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
}

export default page;
