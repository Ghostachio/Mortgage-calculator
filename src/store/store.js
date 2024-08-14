import { createStore } from "redux";

const initialState = {
  amount: "",
  term: "",
  rate: "",
  type: "",
  monthly: "",
  total: "",
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case "updateAmount":
      return {
        ...state,
        amount: action.payload,
      };
    case "updateTerm":
      return {
        ...state,
        term: action.payload,
      };
    case "updateRate":
      return {
        ...state,
        rate: action.payload,
      };
    case "updateType":
      return {
        ...state,
        type: action.payload,
      };
    case "updateMonthly":
      return {
        ...state,
        monthly: action.payload,
      };
    case "updateInterest":
      return {
        ...state,
        monthly: action.payload,
      };
    case "clearAll":
      return {
        ...state,
        amount: "",
        term: "",
        rate: "",
        type: "",
        monthly: "",
        total: "",
      };
    default:
      return state;
  }
};

const store = createStore(calcReducer);

export default store;
