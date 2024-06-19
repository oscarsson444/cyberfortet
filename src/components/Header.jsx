import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 w-full bg-white/30">
      <nav className="flex flex-row  h-20 items-center justify-center">
        <Link
          to="/"
          className={`p-2 ${
            location.pathname === "/" ? "underline text-[#6fbdaa]" : ""
          } text-white hover:text-gray-300`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`p-2 ${
            location.pathname === "/about" ? "underline text-[#6fbdaa]" : ""
          } text-white hover:text-gray-300`}
        >
          About
        </Link>
        <Link
          to="/articles"
          className={`p-2 ${
            location.pathname === "/articles" ? "underline text-[#6fbdaa]" : ""
          } text-white hover:text-gray-300`}
        >
          Articles
        </Link>
      </nav>
    </header>
  );
}
