import { articles } from "../articles/content";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Articles() {
  const location = useLocation();
  return (
    <div className="w-full">
      {location.pathname === "/articles" && (
        <div className="text-white mt-5 md:mt-20 px-2 grid grid-cols-1 gap-4 md:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={index} to={article.url}>
              <div className="article-card">
                <h3>{article.name}</h3>
                <p>{article.description}</p>
                <p>Antal ord: {article.wordCount}</p>
                <p>Lästid: {article.estRead} min</p>
                <p>Skapad: {article.created}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="w-full items-center justify-center flex mt-10">
        <Outlet />
      </div>
    </div>
  );
}
