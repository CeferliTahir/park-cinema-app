import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { LANGUAGE_OPTIONS } from "../../../helpers/constants";

const LanguageDropdown = ({ setLanguage, language }) => {
  return (
    <FormControl
      variant="standard"
      className="w-full"
      sx={{
        m: 1,
        minWidth: 120,
        "& .MuiInputBase-root": { color: "white" },
        "& .MuiSvgIcon-root": { color: "white" },
        "& .MuiInput-underline:before": { borderBottomColor: "white" },
        "& .MuiInput-underline:hover:before": {
          borderBottomColor: "white !important",
          borderBottomWidth: "2px !important",
        },
        "& .MuiInput-underline:after": { borderBottomColor: "red" },
      }}
    >
      <Select
        className="text-center"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        displayEmpty
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#928f8f",
              color: "white",
            },
          },
        }}
      >
        <MenuItem disabled value="">
          <em>Dil</em>
        </MenuItem>

        {LANGUAGE_OPTIONS.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageDropdown;
