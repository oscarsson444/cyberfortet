import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 w-full bg-white/30">
      <nav className="flex flex-row  h-20 items-center justify-center">
        <Link to="/" className="p-2 text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/about" className="p-2 text-white hover:text-gray-300">
          About
        </Link>
      </nav>
    </header>
  );
}
