import React from "react";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
const Average = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box sx={{ padding: "0.4rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          sx={{
            fontWeight: "600",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Average Driving
        </Typography>
        <Box
        // sx={{ border: "1px solid black" }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              size="small"
              sx={{ width: "8rem" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>{" "}
      </Box>
      <Box
        sx={{
          // border: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <PeopleAltOutlinedIcon
            sx={{ width: "3.2rem", height: "5rem", color: "#E6E6FA" }}
          />
        </Box>
        <Box
          sx={{
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ color: "red" }}>-</span>
          <Typography
            sx={{ color: "#E6E6FA", fontWeight: "500", fontSize: "2.2rem" }}
          >
            0 min
          </Typography>
          <Typography sx={{ color: "#E6E6FA", fontWeight: "550" }}>
            0 Objects
          </Typography>
          <Typography SX={{ fontWeight: "600" }}>0 Drivers</Typography>
          {/* <Box
            sx={{
              backgroundColor: " #8594e4",
              padding: "0.1rem",
              borderRadius: "0.3rem",
            }}
          >
            <Typography sx={{ color: "white" }}> 0% Object</Typography>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Average;
