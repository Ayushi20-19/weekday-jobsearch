import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const JobFilter = ({ filterData, selectedValues, setSelectedValues }) => {
  const handleChange = (type, value) => {
    let newSelectedValues = [];
    if (Array.isArray(value) && value.length > 0) {
      newSelectedValues = [
        ...selectedValues.filter((val) => val.type !== type),
        { type, value },
      ];
    } else {
      newSelectedValues = selectedValues.filter((val) => val.type !== type);
    }
    setSelectedValues(newSelectedValues);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "38px",
        paddingY: "8px",
        minWidth: "150px",
        "& .MuiFormControl-root": {
          marginTop: "8px",
          marginBottom: "8px",
        },
      }}
    >
      {filterData.map((filter, index) => (
        <Autocomplete
          key={index}
          multiple
          id={`filter-${index}`}
          options={filter.options.filter((option) => {
            const selectedOption = selectedValues.find(
              (val) => val.type === filter.type
            );
            return (
              !selectedOption ||
              (Array.isArray(selectedOption.value)
                ? !selectedOption.value.includes(option)
                : selectedOption.value !== option)
            );
          })}
          getOptionLabel={(option) => option}
          onChange={(event, value) => handleChange(filter.type, value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label={filter.title}
              placeholder={filter.title}
              size="small"
              sx={{ fontSize: "14px" }}
            />
          )}
        />
      ))}
    </Stack>
  );
};

export default JobFilter;
