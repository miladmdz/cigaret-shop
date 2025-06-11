"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";

import BaseButton from "@/components/shared/base-button/BaseButton.component";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const AnimatedMenu = ({ routeMap }) => {
  const pathName = usePathname();

  return (
    <motion.div
      className="w-full h-full relative flex flex-col justify-start items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative w-[200px] h-[200px]"
        variants={itemVariants}
      >
        <Image alt="logo website" src="/Images/logo-white.webp" fill />
      </motion.div>

      <motion.ul
        className="flex flex-col items-center gap-5 text-primaryCream font-Dana-Medium"
        variants={containerVariants}
      >
        {routeMap.map((item) => (
          <Link
            className={`${item.to === pathName && "text-primaryOrange-dark"}`}
            key={item.label}
            href={item.to}
          >
            <motion.li variants={itemVariants}>{item.label}</motion.li>
          </Link>
        ))}
      </motion.ul>

      <motion.span className="mt-5" variants={itemVariants}>
        <BaseButton
          iconName="heart-outline"
          color="text-primaryCream"
          sideIcon="left"
          text="ذخیره شده ها"
        />
      </motion.span>
    </motion.div>
  );
};
export default AnimatedMenu;
