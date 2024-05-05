import { useState } from "react";
import "./App.css";
import JobFilter from "./components/JobFilter/JobFilter";
import JobCard from "./components/JobCard/JobCard";

function App() {
  const data = [
    {
      jdUid: "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: null,
      minJdSalary: 44,
      salaryCurrencyCode: "USD",
      location: "chennai",
      // minExp: 7,
      maxExp: 14,
      jobRole: "tech lead",
      companyName: "Olympus",
      logoUrl: "https://logo.clearbit.com/olympus.com",
    },
    {
      jdUid: "cfff3d31-053c-11ef-83d3-06301d0a7178-92052",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 78,
      minJdSalary: 48,
      salaryCurrencyCode: "USD",
      location: "mumbai",
      minExp: null,
      maxExp: 8,
      jobRole: "ios",
      companyName: "Alibaba",
      logoUrl: "https://logo.clearbit.com/alibaba.com",
    },
    {
      jdUid: "cfff3d3e-053c-11ef-83d3-06301d0a7178-92054",
      jdLink: "https://weekday.works",
      jobDetailsFromCompany:
        "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
      maxJdSalary: 102,
      minJdSalary: null,
      salaryCurrencyCode: "USD",
      location: "bangalore",
      minExp: 8,
      maxExp: 8,
      jobRole: "backend",
      companyName: "GoPro",
      logoUrl: "https://logo.clearbit.com/gopro.com",
    },
  ];
  //filter values from the data
  const companyNames = Array.from(
    new Set(data.map((job) => job.companyName).filter((name) => name))
  );
  const locations = Array.from(
    new Set(data.map((job) => job.location).filter((location) => location))
  );
  const roles = Array.from(
    new Set(data.map((job) => job.jobRole).filter((role) => role))
  );
  const techStacks = Array.from(
    new Set(data.map((job) => job.techStack).filter((stack) => stack))
  );
  const minExperiences = Array.from(
    new Set(data.map((job) => job.minExp).filter((exp) => exp))
  );
  const minBasePays = Array.from(
    new Set(data.map((job) => job.minJdSalary).filter((salary) => salary))
  );

  // Remote/on-site
  const remoteOptions = ["Remote", "On-site", "Hybrid"];

  // Filter data based on selected filter values
  const [filteredData, setFilteredData] = useState(data);
  const [selectedValues, setSelectedValues] = useState([]);

  const filterData = [
    { title: "Company Name", type: "companyName", options: companyNames },
    { title: "Location", type: "location", options: locations },
    { title: "Role", type: "role", options: roles },
    { title: "Tech Stack", type: "techStack", options: techStacks },
    { title: "Minimum Experience", type: "minExp", options: minExperiences },
    { title: "Minimum Base Pay", type: "minJdSalary", options: minBasePays },
    { title: "Remote/on-site", type: "remote", options: remoteOptions },
  ];

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
        {filteredData.map((val) => (
          <JobCard key={val.jdUid} data={val} />
        ))}
      </div>
    </>
  );
}

export default App;
