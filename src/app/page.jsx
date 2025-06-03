import Image from "next/image";

import Brands from "@/components/home/Brands.component";
import MostPopular from "@/components/home/MostPopular.component";
import Newest from "@/components/home/Newest.component";
import PromotionalSlider from "@/components/home/PromotionalSlider.component";
import TransportNotic from "@/components/home/TransportNotic.component";

const Home = () => {
  const images = [
    { src: "/images/banner1.webp", desc: "first banner image" },
    { src: "/images/banner2.webp", desc: "second banner image" },
  ];

  return (
    <div>
      <PromotionalSlider images={images} />

      <div className="px-4 xl:px-40 pb-5">
        <MostPopular />
      </div>

      <div className="relative w-full h-[400px] md:h-[260px] flex flex-col md:flex-row items-center justify-between gap-2 px-4 xl:px-40 py-5 ">
        <div className="relative w-full md:w-1/2 h-full">
          <Image
            className="rounded"
            src="/images/cigarBanner.webp"
            alt="cigaret banner"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <div className="relative w-full md:w-1/2 h-full">
          <Image
            className="rounded"
            src="/images/pipBanner.webp"
            alt="pip banner"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </div>

      <div className="px-4 xl:px-40 pb-5">
        <Newest />
      </div>

      <Brands />

      <TransportNotic />
    </div>
  );
};

export default Home;
