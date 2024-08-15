import { useSelector, useDispatch } from "react-redux";

import { calculatorActions } from "../store/store";

export default function Calculate() {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.calculator.amount);

  const term = useSelector((state) => state.calculator.term);

  const rate = useSelector((state) => state.calculator.rate);

  const type = useSelector((state) => state.calculator.type);

  const p = amount;
  const r = rate / 100 / 12; // Monthly interest rate
  const n = term * 12; // Total number of payments

  const calculateHandler = () => {
    if (type === "repayment") {
      const monthlyPayment =
        (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      dispatch(calculatorActions.updateMonthly(monthlyPayment));
    } else if (type === "interest") {
      const monthlyInterest = p * r;
      dispatch(calculatorActions.updateMonthly(monthlyInterest));
    } else {
      return;
    }

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
