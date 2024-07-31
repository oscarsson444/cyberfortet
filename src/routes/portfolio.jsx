import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Star from "../components/Star";

export default function Portfolio() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const documentHeight = document.documentElement.scrollHeight;
    const documentWidth = document.documentElement.scrollWidth;

    const starConstant = Math.ceil(documentHeight * documentWidth * 0.00006);

    const starsArray = [...Array(starConstant)].map(() => ({
      top: Math.random() * (documentHeight - 10),
      left: Math.random() * (documentWidth - 10),
    }));

    setStars(starsArray);
  }, []);
  return (
    <div className="text-white flex flex-col gap-5 w-full justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="portfolio-card mt-10"
      >
        <h4>Projekt</h4>
        <p>Spel</p>
      </motion.div>
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
