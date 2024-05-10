import { GoCommandPalette } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomeMenu() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-10">
        <div className="home-menu-item">
          <Link to="/terminal">
            <GoCommandPalette className="w-20 h-20" />
          </Link>
        </div>
        <div className="home-menu-item">
          <Link to="/about">
            <BsPerson className="w-20 h-20" />
          </Link>
        </div>
      </div>
    </div>
  );
}
