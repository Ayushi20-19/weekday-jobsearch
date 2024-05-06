// Import necessary packages
import { createSlice } from "@reduxjs/toolkit";
import { getCompanyDataService } from "../services/company";
import { filterCompanyData } from "../../utils/utils";

// Define initial state
const initialState = {
  status: null,
  companyData: [],
  totalCount: 0,
  selectedFilters: [],
  filteredCompanies: [],
};

// Create slice for managing company data
const companiesDataSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    // Set selected filters
    setSelectedFilters: (state, action) => {
      state.selectedFilters = action.payload || [];
    },
    // Set filtered companies based on selected filters
    setFilteredCompanies: (state) => {
      state.filteredCompanies = filterCompanyData(
        state.selectedFilters,
        state.companyData
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state for fetching company data
      .addCase(getCompanyDataService.pending, (state) => {
        state.status = "pending";
      })
      // Handle successful fetching of company data
      .addCase(getCompanyDataService.fulfilled, (state, { payload }) => {
        state.status = "resolved";
        state.companyData = [...state.companyData, ...payload.jdList];
        state.totalCount = payload.totalCount;
      })
      // Handle error while fetching company data
      .addCase(getCompanyDataService.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { setSelectedFilters, setFilteredCompanies } =
  companiesDataSlice.actions;
export default companiesDataSlice.reducer;
