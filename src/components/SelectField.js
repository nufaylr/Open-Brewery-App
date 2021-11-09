import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SelectField = ({ defaultValue, id, label, options, handleChange }) => {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
          labelId={`${id}-label`}
          id={`${id}-select`}
          value={defaultValue ? defaultValue : ""}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value="all">All</MenuItem>
          {options &&
            options.map((option, key) => (
              <MenuItem value={option} key={key}>
                {option}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectField;
