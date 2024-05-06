import { useEffect, useMemo, useState } from "react";
import "./App.css";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "./components/JobCard/JobCard";
import { createFilteredData, filterCompanyData } from "./utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyDataService } from "./redux/services/company";
import InfiniteScroll from "react-infinite-scroll-component";
import { setFilteredCompanies } from "./redux/slices/companiesDataSlice";
import { Box, IconButton, LinearProgress } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

// Remote/on-site default options
const remoteOptions = ["Remote", "On-site", "Hybrid"];

function App() {
  const [offset, setOffset] = useState(10);
  const dispatch = useDispatch();
  const {
    status,
    companyData,
    totalCount,
    selectedFilters,
    filteredCompanies,
  } = useSelector((state) => state.company);

  //added useMemo to reduce createFilter calculation
  const filterData = useMemo(
    () => [
      {
        title: "Company Name",
        type: "companyName",
        options: createFilteredData(companyData, "companyName"),
      },
      {
        title: "Location",
        type: "location",
        options: createFilteredData(companyData, "location"),
      },
      {
        title: "Role",
        type: "role",
        options: createFilteredData(companyData, "jobRole"),
      },
      {
        title: "Tech Stack",
        type: "techStack",
        options: createFilteredData(companyData, "techStack"),
      },
      {
        title: "Minimum Experience",
        type: "minExp",
        options: createFilteredData(companyData, "minExp"),
      },
      {
        title: "Minimum Base Pay",
        type: "minJdSalary",
        options: createFilteredData(companyData, "minJdSalary"),
      },
      { title: "Remote/on-site", type: "remote", options: remoteOptions },
    ],
    [companyData]
  );
  useEffect(() => {
    dispatch(setFilteredCompanies());
  }, [selectedFilters]);

  useEffect(() => {
    dispatch(getCompanyDataService({ offset }));
  }, [dispatch, offset]);

  const companiesData =
    selectedFilters.length > 0 ? filteredCompanies : companyData;
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <IconButton className="scrollToTopButton" onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </IconButton>
      <div className="jobFilterConatiner">
        <JobFilter filterData={filterData} />
      </div>
      <div className="infinteScrollContainer">
        <InfiniteScroll
          dataLength={companiesData.length}
          next={() => setOffset((prev) => prev + 10)}
          hasMore={companiesData.length < totalCount}
          loader={
            companiesData.length === 0 ? (
              <p>No data found for the selected filter.</p>
            ) : (
              <Box
                sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
              >
                <LinearProgress />
              </Box>
            )
          }
          endMessage={
            status === "pending" ? "Loading" : <p>No more data to load.</p>
          }
        >
          <div className="jobCardContainer">
            {companiesData.map((val, index) => (
              <JobCard key={`${val.jdUid}-${index}`} data={val} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
