import React from "react";

function page() {
  const descriptionText = [
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",

    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است",

    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",

    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
  ];

  return (
    <div className="my-6 mx-4 xl:mx-40 px-5 py-3 bg-white rounded">
      <h1 className="text-2xl sm:text-4xl font-bold text-primaryOrange-light">
        "درباره اسموک سیتی"
      </h1>

      <h2 className="text-xl sm:text-2xl font-bold my-5 text-primaryOrange-light">
        هدف اصلی افتتاح فروشگاه اسموک سیتی:
      </h2>

      <div className="flex flex-col gap-4">
        {descriptionText.map((text, index) => (
          <p
            key={index}
            className="text-sm sm:text-base text-primaryBlack leading-10"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default page;
