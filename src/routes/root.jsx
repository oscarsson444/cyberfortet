import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="font-regular bg-gradient-to-t from-gray-500 via-teal-900 to-slate-700 h-fit min-h-screen w-full">
      <Header />
      <div className="flex justify-center ">
        <Outlet />
      </div>
    </div>
  );
}
