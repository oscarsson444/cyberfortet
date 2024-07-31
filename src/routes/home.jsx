import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HomeMenu from "../components/HomeMenu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Star from "../components/Star";
import { motion } from "framer-motion";

export default function Home() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const { t } = useTranslation();

  const [stars, setStars] = useState([]);

  useEffect(() => {
    const documentHeight = document.documentElement.scrollHeight;
    const documentWidth = document.documentElement.scrollWidth;

    const starConstant = Math.ceil(documentHeight * documentWidth * 0.00006);

    const starsArray = [...Array(starConstant)].map(() => ({
      top: Math.random() * (documentHeight - 5),
      left: Math.random() * (documentWidth - 5),
    }));

    setStars(starsArray);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScrollDown = () => {
    window.scroll({ top: document.body.offsetHeight, behavior: "smooth" });
  };

  const handleScrollUp = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-white w-full text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex h-[calc(100vh-80px)] justify-center w-full flex-col gap-5 text-center"
      >
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <h1 className="text-4xl sm:text-6xl">{t("welcome-1")}</h1>
          <h2 className="text-3xl sm:text-5xl">{t("welcome-2")}</h2>
        </div>
        <img
          src="/images/background/rotating_earth.gif"
          className="self-center self-cover w-4/5 sm:w-[25%] z-10"
        />
        <div
          onClick={isScrolledDown ? handleScrollUp : handleScrollDown}
          className="w-full flex justify-center items-center cursor-pointer"
        >
          {isScrolledDown ? (
            <IoIosArrowUp className="animate-bounce h-[50px] w-[50px] bg-black/20 rounded-full hover:bg-black/40" />
          ) : (
            <IoIosArrowDown className="animate-bounce h-[50px] w-[50px] bg-black/20 rounded-full hover:bg-black/40" />
          )}
        </div>
      </motion.div>
      <div className="flex justify-center items-center h-[30vh]">
        <HomeMenu />
      </div>
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            top: `${star.top}px`,
            left: `${star.left}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Star />
        </div>
      ))}
    </div>
  );
}
