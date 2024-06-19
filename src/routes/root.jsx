import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  const location = useLocation();

  return (
    <div className="font-regular bg-gradient-to-t from-gray-500 via-teal-900 to-slate-700 h-fit min-h-screen w-full">
      <Header />
      <div className="flex justify-center ">
        <Outlet />
      </div>
    </div>
  );
}
