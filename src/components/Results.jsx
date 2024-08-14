import MonthlyResults from "./MontlyResults";
import EndResult from "./EndResult";

export default function Results() {
  return (
    <section className="p-10 bg-blue-950 w-6/12 rounded-bl-3xl ">
      <MonthlyResults />
      <EndResult />
    </section>
  );
}
