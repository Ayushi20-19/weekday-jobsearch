import { useEffect, useMemo, useState } from "react";
import "./App.css";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "./components/JobCard/JobCard";
import { createFilteredData } from "./utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyDataService } from "./redux/services/company";
import InfiniteScroll from "react-infinite-scroll-component";

// Remote/on-site default options
const remoteOptions = ["Remote", "On-site", "Hybrid"];

function App() {
  const [selectedValues, setSelectedValues] = useState([]);
  const [offset, setOffset] = useState(10);
  const dispatch = useDispatch();
  const { companyData, totalCount } = useSelector((state) => state.company);

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
    dispatch(getCompanyDataService({ offset }));
  }, [dispatch, offset]);

  return (
    <>
      <div style={{ padding: "2rem" }}>
        <JobFilter
          filterData={filterData}
          selectedValues={selectedValues}
          setSelectedValues={setSelectedValues}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <InfiniteScroll
          dataLength={companyData.length}
          next={() => setOffset((prev) => prev + 10)}
          hasMore={companyData.length < totalCount}
          loader={<p>Loading...</p>}
          endMessage={<p>No more data to load.</p>}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {companyData.map((val) => (
              <JobCard key={val.jdUid} data={val} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

export default App;
