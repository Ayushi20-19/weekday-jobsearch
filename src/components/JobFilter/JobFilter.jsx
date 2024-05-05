import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFilters } from "../../redux/slices/companiesDataSlice";

const JobFilter = ({ filterData }) => {
  const dispatch = useDispatch();
  const { selectedFilters } = useSelector((state) => state.company);

  const handleChange = (type, value) => {
    let newSelectedValues = [];

    if (Array.isArray(value) && value.length > 0) {
      newSelectedValues = [
        ...selectedFilters.filter((val) => val.type !== type),
        { type, value },
      ];
    } else {
      newSelectedValues = selectedFilters.filter((val) => val.type !== type);
    }

    dispatch(setSelectedFilters(newSelectedValues));
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
          style={{ minWidth: "200px" }}
          key={index}
          multiple
          id={`filter-${index}`}
          options={filter.options.filter((option) => {
            const selectedOption = selectedFilters?.find(
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
