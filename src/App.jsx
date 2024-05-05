import { useEffect, useState } from "react";
import "./App.css";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "./components/JobCard/JobCard";
import { createFilteredData } from "./utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyDataService } from "./redux/services/company";

function App() {
  const { companyData } = useSelector((state) => state.company);
  const dispatch = useDispatch();

  // Remote/on-site default options
  const remoteOptions = ["Remote", "On-site", "Hybrid"];
  const [selectedValues, setSelectedValues] = useState([]);

  const filterData = [
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
  ];
  useEffect(() => {
    dispatch(getCompanyDataService({ offset: 20 }));
  }, [dispatch]);

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
        {companyData.map((val) => (
          <JobCard key={val.jdUid} data={val} />
        ))}
      </div>
    </>
  );
}

export default App;
