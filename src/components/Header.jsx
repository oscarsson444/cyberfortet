import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 w-full bg-white/30">
      <nav className="flex flex-row  h-20 items-center justify-center text-white">
        <Link
          to="/"
          className={`p-2 ${
            location.pathname === "/" ? "underline text-[#77cfb9]" : ""
          } hover:text-gray-300`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`p-2 ${
            location.pathname === "/about" ? "underline text-[#77cfb9]" : ""
          } hover:text-gray-300`}
        >
          About
        </Link>
        <Link
          to="/articles"
          className={`p-2 ${
            location.pathname === "/articles" ? "underline text-[#77cfb9]" : ""
          } hover:text-gray-300`}
        >
          Articles
        </Link>
      </nav>
    </header>
  );
}
