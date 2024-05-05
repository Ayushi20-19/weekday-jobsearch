//All company data releated apis will be here
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

export const getCompanyDataService = createAsyncThunk(
  "company",
  async ({ offset }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/adhoc/getSampleJdJSON`,

        { limit: 10, offset: offset || 10 }
      );
      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
