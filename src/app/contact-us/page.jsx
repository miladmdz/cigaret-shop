import Link from "next/link";
import React from "react";
import IconLoader from "../../../public/Icon/Icon-Loader";

function page() {
  const contactInfo = [
    {
      iconName: "PhoneOutline",
      text: "تماس با پشتیبانی : 01234567890 (از 10 الی 14 روز غیر تعطیل)",
      link: "tel:+981234567890",
    },
    {
      iconName: "MessageOutline",
      text: "ایمیل پشتیبانی : test@gmail.com",
      link: "test@gmail.com",
    },
    {
      iconName: "LocationOutline",
      text: "آدرس فروشگاه مرکزی : تست",
      link: "http://maps.google.com/?q=1200 Pennsylvania Ave SE, Washington, District of Columbia, 20003",
    },
  ];

  return (
    <div className="my-6 mx-4 xl:mx-40 px-5 py-3 bg-white rounded">
      <h1 className="text-4xl font-bold text-primaryOrange-light mb-8">
        با ما در ارتباط باشید
      </h1>

      <div className="flex flex-col items-start gap-2 mb-5">
        {contactInfo.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="flex items-start gap-2 text-xl text-gray-600/50"
          >
            <IconLoader iconName={item.iconName} />

            <p>{item.text}</p>
          </Link>
        ))}
      </div>

      <p className="">
        از ساعت 9 الی 14 در روزهای غیر تعطیل پاسخ گوی شما هستیم.
      </p>
    </div>
  );
}

export default page;
