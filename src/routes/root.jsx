import Background from "../components/Background";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Header />
      <Background />
      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}
