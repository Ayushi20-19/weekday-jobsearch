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
