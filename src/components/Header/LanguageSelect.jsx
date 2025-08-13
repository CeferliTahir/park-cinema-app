import { Select, MenuItem } from "@mui/material";
import { LANGUAGE_LIST } from "../../helpers/constants";

const LanguageSelect = ({ lang, setLang }) => {
  return (
    <Select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      MenuProps={{
        disableScrollLock: true,
      }}
      sx={{
        minWidth: 100,

        "& fieldset": { border: "none" },
        "& .MuiSelect-icon": { color: "white" },
        "& .MuiSelect-select": { display: "flex", alignItems: "center", py: 1 },
      }}
      renderValue={(selected) => {
        const { flag, code } = LANGUAGE_LIST.find((l) => l.code === selected);
        return (
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={flag} alt={code} className="w-[25px] h-[25px]" />
            <p className="text-0001 text-sm pr-3 font-fire font-medium">
              {code}
            </p>
          </div>
        );
      }}
    >
      {LANGUAGE_LIST.map(({ code, flag }) => (
        <MenuItem
          key={code}
          value={code}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            fontSize: 12,
            "&:hover": { backgroundColor: "#e0e0e0" },
          }}
        >
          <img src={flag} alt={code} width="20" height="15" />
          <span>{code}</span>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelect;
