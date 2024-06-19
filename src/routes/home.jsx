import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HomeMenu from "../components/HomeMenu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const { t } = useTranslation();

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
    <div className="text-white w-full justify-center flex flex-col text-center">
      <div className="h-screen flex w-full mt-5 flex-col text-center">
        <div className="flex flex-col justify-center items-center overflow-hidden mb-10">
          <h1 className="text-4xl sm:text-6xl">{t("welcome-1")}</h1>
          <h2 className="text-3xl sm:text-5xl">{t("welcome-2")}</h2>
        </div>
        <img
          src="/images/background/rotating_earth.gif"
          className="self-center self-cover w-4/5 sm:w-[25%]"
        />
        <div
          onClick={isScrolledDown ? handleScrollUp : handleScrollDown}
          className="w-full flex justify-center items-center mt-10 cursor-pointer"
        >
          {isScrolledDown ? (
            <IoIosArrowUp className="animate-bounce h-[50px] w-[50px] bg-black/20 rounded-full hover:bg-black/40" />
          ) : (
            <IoIosArrowDown className="animate-bounce h-[50px] w-[50px] bg-black/20 rounded-full hover:bg-black/40" />
          )}
        </div>
      </div>
      <div className="flex justify-center items-center h-[50vh]">
        <HomeMenu />
      </div>
    </div>
  );
}
