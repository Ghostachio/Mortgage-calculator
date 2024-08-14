import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  const clearHandle = () => {
    dispatch({ type: "clearAll" });
  };
  return (
    <header className="flex justify-between p-2 sm:flex-wrap sm:gap-3">
      <h1 className="font-bold text-blue-950 text-2xl">Mortgage Calculator</h1>
      <button className="text-gray-400" onClick={clearHandle}>
        Clear All
      </button>
    </header>
  );
}
