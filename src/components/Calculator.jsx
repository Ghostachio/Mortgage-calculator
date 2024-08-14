import Header from "./Header";
import Calculate from "./Calculate";
import Form from "./Form";

export default function Calculator() {
  return (
    <section className="bg-white p-10 w-6/12 rounded-l-2xl">
      <Header />
      <Form />
      <Calculate />
    </section>
  );
}
