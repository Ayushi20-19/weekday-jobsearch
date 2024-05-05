// Function to create filter
export const createFilteredData = (data, dataKey) => {
  return Array.from(
    new Set(data.map((job) => job[dataKey]).filter((dataValue) => dataValue))
  );
};

// Function to format salary range
export const formatSalary = (minJdSalary,maxJdSalary) => {
  if (minJdSalary && maxJdSalary) {
    return `₹${minJdSalary} - ₹${maxJdSalary} LPA`;
  }
  if (minJdSalary) {
    return `Above ₹${minJdSalary} LPA`;
  }
  if (maxJdSalary) {
    return `Upto ₹${maxJdSalary} LPA`;
  }
  return "Salary not provided";
};

// Function to format experience range
export const formatExperience = (minExp,maxExp) => {
  if (minExp && maxExp) {
    return `${minExp} - ${maxExp} years`;
  }
  if (minExp) {
    return `Minimum ${minExp} years`;
  }
  if (maxExp) {
    return `Upto ${maxExp} years`;
  }
  return "Experience not provided";
};


// function to filter Companies data
export const filterCompanyData = (selectedFilters, companyData) => {  
  return companyData.filter(company => {
      return selectedFilters?.every(({ type, value }) => {
        
          switch (type) {
              case "companyName":
                  return value.includes(company.companyName);
              case "location":
                  return value.includes(company.location);
              case "role":
                  return value.includes(company.jobRole);
              case "techStack":
                  return value.some(stack => company.techStack.includes(stack));
              case "minExp":
                  return company.minExp >= Math.min(...value);
              case "minJdSalary":
                  return company.minJdSalary >= Math.min(...value);
              case "remote":
                  return value.includes(company.locationType); 
              default:
                  return true;
          }
      });
  });
};