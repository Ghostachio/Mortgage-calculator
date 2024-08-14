import { useSelector, useDispatch } from "react-redux";

export default function Calculate() {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.amount);

  const term = useSelector((state) => state.term);

  const rate = useSelector((state) => state.rate);

  const type = useSelector((state) => state.type);

  const p = amount;
  const r = rate / 100 / 12; // Monthly interest rate
  const n = term * 12; // Total number of payments

  const calculateHandler = () => {
    if (type === "repayment")
      dispatch({
        type: "updateMonthly",
        payload: (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1),
      });
    else if (type === "interest") {
      dispatch({
        type: "updateMonthly",
        payload: p * r,
      });
    } else return;

    console.log(type);
  };

  return (
    <div className="p-2">
      <button
        className="pl-6 pr-6 pb-2 pt-2 bg-lime-400 rounded-3xl text-blue-950 font-semibold"
        onClick={calculateHandler}
      >
        Calculte Repayments
      </button>
    </div>
  );
}
