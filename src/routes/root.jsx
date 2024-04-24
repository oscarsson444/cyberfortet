import Background from "../components/Background";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Root() {
  const location = useLocation();

  return (
    <div className="font-regular bg-gradient-to-t from-gray-500 via-teal-900 to-slate-700 h-fit min-h-screen w-full">
      {location.pathname !== "/" && <Header />}
      <div className="flex justify-center ">
        <Outlet />
      </div>
    </div>
  );
}
