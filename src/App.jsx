import Calculator from "./components/Calculator";
import Results from "./components/Results";

function App() {
  return (
    <div className="flex justify-center ">
      <main className="flex w-8/12 h-full content-center rounded-3xl bg-white  overflow-hidden">
        <Calculator />
        <Results />
      </main>
    </div>
  );
}

export default App;
