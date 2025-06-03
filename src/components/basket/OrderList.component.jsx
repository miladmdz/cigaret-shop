import React from "react";
import OrderItem from "./OrderItem.component";

function OrderList() {
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
    <div className="flex flex-col items-start gap-3">
      {products.map((product) => (
        <OrderItem
          key={product.title}
          image={product.image}
          price={product.price}
          title={product.title}
        />
      ))}
    </div>
  );
}

export default OrderList;
