import { GoCommandPalette } from "react-icons/go";
import { GrArticle } from "react-icons/gr";
import { PiSuitcase } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HomeMenu() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-2 gap-10">
        <div className="home-menu-item">
          <Link to="/portfolio">
            <PiSuitcase className="w-20 h-20 mx-auto" />
            <p>Portfolio</p>
          </Link>
        </div>
        <div className="home-menu-item">
          <Link to="/about">
            <BsPerson className="w-20 h-20 mx-auto" />
            <p>About</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
