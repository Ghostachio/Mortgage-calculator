import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  amount: "",
  term: "",
  rate: "",
  type: "",
  monthly: "",
  total: "",
};

const calculateSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    updateAmount(state, action) {
      state.amount = action.payload;
    },
    updateTerm(state, action) {
      state.term = action.payload;
    },
    updateRate(state, action) {
      state.rate = action.payload;
    },
    updateType(state, action) {
      state.type = action.payload;
    },
    updateMonthly(state, action) {
      state.monthly = action.payload;
    },
    updateInterest(state, action) {
      state.monthly = action.payload;
    },
    clearAll() {
      return initialState;
    },
  },
});

const store = configureStore({
  reducer: {
    calculator: calculateSlice.reducer,
  },
});

export const calculatorActions = calculateSlice.actions;

export default store;
