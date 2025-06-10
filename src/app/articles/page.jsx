import React from "react";
import ArticleBox from "@/components/pannel/user/articles/ArticleBox.component";

function page() {
  //TODO:MOCKDATA:
  const articles = [
    {
      title: "ترک سیگار",
      image: "/images/sigar1.jpg",
      view: 25_000,
      date: "1403/09/10",
    },
    {
      title: "ترک قلیان",
      image: "/images/sigar2.jpg",
      view: 250,
      date: "1403/06/15",
    },
    {
      title: "ترک دخانیات",
      image: "/images/sigar3.jpg",
      view: 18,
      date: "1404/01/13",
    },
    {
      title: "مضرات دخانیات",
      image: "/images/sigar4.jpg",
      view: 5_000,
      date: "1404/02/02",
    },
    {
      title: "ویپ های جدید",
      image: "/images/sigar5.jpg",
      view: 532,
      date: "1404/03/05",
    },
  ];

  return (
    <div className="px-4 xl:px-40 py-5">
      <div className="w-full flex flex-wrap justify-center items-start gap-5">
        {articles.map((article) => (
          <ArticleBox
            key={article.date}
            date={article.date}
            image={article.image}
            title={article.title}
            view={article.view}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
