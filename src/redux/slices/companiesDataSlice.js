import { createSlice } from "@reduxjs/toolkit";
import { getCompanyDataService } from "../services/company";

const initialState = {
  status: null,
  companyData: [],
};
const companiesDataSlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyDataService.pending, (state) => {
        console.log("pending");
        state.status = "pending";
      })
      .addCase(getCompanyDataService.fulfilled, (state, action) => {
        console.log("fulfilled payload:", action.payload);
        state.status = "resolved";
        state.companyData = action.payload.jdList;
      })
      .addCase(getCompanyDataService.rejected, (state, action) => {
        console.log("rejected", action.error);
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default companiesDataSlice.reducer;
