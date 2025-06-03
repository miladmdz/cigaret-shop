import React from "react";

import ImageCard from "@/components/products/ImageCard.component";
import TabViewCard from "@/components/products/TabViewCard.component";
import InfoCard from "@/components/products/InfoCard.component";
import ProductSlider from "@/components/home/ProductSlider.component";

function slog() {
  const mockData = {
    id: "aerodynamic-rubber-bag-86154666",
    name: "Marlboro",
    images: "/images/test.webp",
    count: 12,
    price: 250_000,
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    category: "Freshio",
    tags: ["eum", "hic", "nihil"],
  };

  const descriptionData = [
    { title: "وزن", value: "نامعلوم" },
    { title: "ابعاد", value: "نامعلوم" },
    { title: "زنگ", value: "نامعلوم" },
  ];

  const commentData = [
    {
      id: 1,
      author: "milad",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero ad nihil illum aperiam quo eum tenetur labore quisquam ex, voluptate earum obcaecati totam blanditiis nemo quasi sequi repellat deleniti iure adipisci eos. Magni harum dicta deleniti. Illum, quae optio minus qui, placeat, sed reprehenderit architecto laudantium harum deserunt corrupti.",
      date: "1404/03/03",
      rate: 3,
    },
    {
      id: 2,
      author: "ehsan",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero ad nihil illum aperiam quo eum tenetur labore quisquam ex, voluptate earum obcaecati totam blanditiis nemo quasi sequi repellat deleniti iure adipisci eos. Magni harum dicta deleniti. Illum, quae optio minus qui, placeat, sed reprehenderit architecto laudantium harum deserunt corrupti.",
      date: "1404/03/03",
      rate: 4,
    },
    {
      id: 3,
      author: "reza",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero ad nihil illum aperiam quo eum tenetur labore quisquam ex, voluptate earum obcaecati totam blanditiis nemo quasi sequi repellat deleniti iure adipisci eos. Magni harum dicta deleniti. Illum, quae optio minus qui, placeat, sed reprehenderit architecto laudantium harum deserunt corrupti.",
      date: "1404/03/03",
      rate: 5,
    },

    {
      id: 4,
      author: "reza",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero ad nihil illum aperiam quo eum tenetur labore quisquam ex, voluptate earum obcaecati totam blanditiis nemo quasi sequi repellat deleniti iure adipisci eos. Magni harum dicta deleniti. Illum, quae optio minus qui, placeat, sed reprehenderit architecto laudantium harum deserunt corrupti.",
      date: "1404/03/03",
      rate: 5,
    },

    {
      id: 5,
      author: "reza",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero ad nihil illum aperiam quo eum tenetur labore quisquam ex, voluptate earum obcaecati totam blanditiis nemo quasi sequi repellat deleniti iure adipisci eos. Magni harum dicta deleniti. Illum, quae optio minus qui, placeat, sed reprehenderit architecto laudantium harum deserunt corrupti.",
      date: "1404/03/03",
      rate: 5,
    },
  ];

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
    <div className="px-1 sm:px-4 xl:px-40 sm:py-10">
      <div className="flex flex-col md:flex-row w-full items-start gap-x-20 py-8">
        <ImageCard images={mockData.images} name={mockData.name} />

        <InfoCard
          name={mockData.name}
          count={mockData.count}
          price={mockData.price}
          description={mockData.description}
          id={mockData.id}
          category={mockData.category}
          tags={mockData.tags}
        />
      </div>

      <TabViewCard description={descriptionData} comments={commentData} />

      <ProductSlider sectionTitle="محصولات مرتبط" products={products} />
    </div>
  );
}

export default slog;
