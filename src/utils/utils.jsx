/**
 * Function to create filter options from data based on a specified key.
 *
 * @param {Array} data - The array of data.
 * @param {string} dataKey - The key to filter data.
 * @returns {Array} An array of unique filter options.
 */
export const createFilteredData = (data, dataKey) => {
  return Array.from(
    new Set(data.map((job) => job[dataKey]).filter((dataValue) => dataValue))
  );
};

/**
 * Function to format salary range.
 *
 * @param {number} minJdSalary - The minimum salary.
 * @param {number} maxJdSalary - The maximum salary.
 * @returns {string} The formatted salary range.
 */
export const formatSalary = (minJdSalary, maxJdSalary) => {
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

/**
 * Function to format experience range.
 *
 * @param {number} minExp - The minimum experience.
 * @param {number} maxExp - The maximum experience.
 * @returns {string} The formatted experience range.
 */
export const formatExperience = (minExp, maxExp) => {
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

/**
 * Function to filter company data based on selected filters.
 *
 * @param {Array} selectedFilters - The array of selected filters.
 * @param {Array} companyData - The array of company data.
 * @returns {Array} The filtered array of company data.
 */
export const filterCompanyData = (selectedFilters, companyData) => {
  return companyData.filter((company) => {
    return selectedFilters?.every(({ type, value }) => {
      switch (type) {
        case "companyName":
          return value.includes(company.companyName);
        case "location":
          return value.includes(company.location);
        case "role":
          return value.includes(company.jobRole);
        case "techStack":
          return value.some((stack) => company.techStack.includes(stack));
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
