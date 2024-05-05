import { createSlice } from "@reduxjs/toolkit";
import { getCompanyDataService } from "../services/company";

const initialState = {
  status: null,
  companyData: [],
  totalCount: 0,
};
const companiesDataSlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanyDataService.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getCompanyDataService.fulfilled, (state, { payload }) => {
        state.status = "resolved";
        state.companyData = [...state.companyData, ...payload.jdList];
        state.totalCount = payload.totalCount;
      })
      .addCase(getCompanyDataService.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default companiesDataSlice.reducer;
