import Cursor from "../components/terminal/Cursor";

export default function Terminal({}) {
  return (
    <div className="text-white mt-10">
      <div className="bg-black grid grid-rows-10 grid-cols-50 w-[50vw] h-[50vh] text-green-500 overflow-hidden">
        <div className=" row-start-10">
          <Cursor />
        </div>
      </div>
    </div>
  );
}
