import { articles } from "../articles/content";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Star from "../components/Star";

export default function Articles() {
  const location = useLocation();
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
    <div className="w-full sm:w-4/5">
      {location.pathname === "/articles" && (
        <div className="text-white mt-5 md:mt-20 px-2 grid grid-cols-1 gap-4">
          {articles.map((article, index) => (
            <Link key={index} to={article.url} className="z-20">
              <div className="article-card sm:justify-between items-center sm:gap-20">
                <img
                  src="https://cdn.pixabay.com/photo/2016/01/30/22/04/typewriter-1170657_1280.jpg"
                  className="w-[250px] sm:hidden block"
                />
                <div>
                  <h3>{article.name}</h3>
                  <p>{article.description}</p>
                  <p>Antal ord: {article.wordCount}</p>
                  <p>Lästid: {article.estRead} min</p>
                  <p>Skapad: {article.created}</p>
                </div>
                <img
                  src="https://cdn.pixabay.com/photo/2016/01/30/22/04/typewriter-1170657_1280.jpg"
                  className="w-[250px] hidden sm:block"
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="w-full items-center justify-center flex mt-10">
        <Outlet />
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
