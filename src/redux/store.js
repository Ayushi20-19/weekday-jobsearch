import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "./slices/companiesDataSlice";

const store = configureStore({
  reducer: {
    company: companyReducer,
  },
});

export default store;
