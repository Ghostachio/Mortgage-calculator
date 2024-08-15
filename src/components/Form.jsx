import { useSelector, useDispatch } from "react-redux";

import { calculatorActions } from "../store/store";

export default function Form() {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.calculator.amount);
  const term = useSelector((state) => state.calculator.term);
  const rate = useSelector((state) => state.calculator.rate);
  const type = useSelector((state) => state.calculator.type);

  // updating functions
  const amountHandler = (e) => {
    dispatch(calculatorActions.updateAmount(e.target.value));
    console.log(amount);
  };
  const termHandler = (e) => {
    dispatch(calculatorActions.updateTerm(e.target.value));
  };
  const rateHandler = (e) => {
    dispatch(calculatorActions.updateRate(e.target.value));
  };
  const typeHandler = (paymentType) => {
    dispatch(calculatorActions.updateType(paymentType));
  };

  return (
    <div className="p-4">
      <form className="space-y-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="text-gray-500">
            Mortgage Amount
          </label>
          <input
            type="number"
            className="border border-gray-600 p-2 rounded"
            name="amount"
            id="amount"
            value={amount}
            onChange={amountHandler}
          />
        </div>

        <div className="lg:flex gap-4 sm:flex-wrap sm:gap-8">
          <div className="flex-1">
            <label htmlFor="term" className="text-gray-500 text-sm">
              Mortgage Term
            </label>
            <input
              type="number"
              className="border border-gray-600 p-2 rounded w-full"
              name="term"
              id="term"
              value={term}
              onChange={termHandler}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="rate" className="text-gray-500 text-sm">
              Interest Rate
            </label>
            <input
              type="number"
              className="border border-gray-600 p-2 rounded w-full"
              name="rate"
              id="rate"
              value={rate}
              onChange={rateHandler}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Mortgage Type</p>
          <div className="space-y-2">
            <div className="flex items-center bg-green-200 p-2 border border-lime-300 rounded">
              <input
                type="radio"
                id="repayment"
                name="type"
                value="repayment"
                onChange={() => typeHandler("repayment")}
                checked={type === "repayment"}
                className="mr-2"
              />
              <label htmlFor="repayment">Repayment</label>
            </div>
            <div className="flex items-center bg-green-200 p-2 border border-lime-300 rounded">
              <input
                type="radio"
                id="interest"
                name="type"
                value="interest"
                onChange={() => typeHandler("interest")}
                checked={type === "interest"}
                className="mr-2"
              />
              <label htmlFor="interest">Interest Only</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
