import { createSlice } from "@reduxjs/toolkit";
import { getCompanyDataService } from "../services/company";
import { filterCompanyData } from "../../utils/utils";

const initialState = {
  status: null,
  companyData: [],
  totalCount: 0,
  selectedFilters: [],
  filteredCompanies: [],
};
const companiesDataSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    setSelectedFilters: (state, action) => {
      state.selectedFilters = action.payload || [];
    },
    setFilteredCompanies: (state) => {
      state.filteredCompanies = filterCompanyData(
        state.selectedFilters,
        state.companyData
      );
    },
  },
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

export const { setSelectedFilters, setFilteredCompanies } =
  companiesDataSlice.actions;
export default companiesDataSlice.reducer;
