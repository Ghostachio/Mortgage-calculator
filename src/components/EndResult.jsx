import { useSelector } from "react-redux";

export default function EndResult() {
  const monthly = useSelector((state) => state.calculator.monthly);
  const term = useSelector((state) => state.calculator.term);

  const total = (monthly * term).toFixed(2);
  return (
    <div className="flex flex-col">
      <div className="bg-blue-800 p-3 rounded-lg border-teal-300 border-t-2">
        <p className="text-gray-500">Your monthly repayments</p>
        <h2 className="text-3xl text-teal-300 pb-4">
          {monthly ? (
            monthly.toFixed(2)
          ) : (
            <div>
              <h3>Your Monthly Payment</h3>
            </div>
          )}
        </h2>
        <hr />
        <p className="text-gray-500">Total you will repay over the term</p>
        <h3 className="font-bold text-white">
          {total ? (
            total
          ) : (
            <div>
              <h4>Total</h4>
            </div>
          )}
        </h3>
      </div>
    </div>
  );
}
