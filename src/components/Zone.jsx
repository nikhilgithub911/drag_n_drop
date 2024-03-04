import React from "react";
import { Box, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LocationOffOutlinedIcon from "@mui/icons-material/LocationOffOutlined";

const Zone = () => {
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
          Stay in zone
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
          <LocationOffOutlinedIcon
            sx={{ width: "3.2rem", height: "5rem", color: "white" }}
          />
        </Box>
        <Box
          sx={{
            // border: "1px solid black",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ color: "red", fontWeight: "600" }}>
            Max Overstay
          </Typography>
          <span style={{ color: "red" }}>0 min</span>
          <Typography
            sx={{ color: "white", fontWeight: "500", fontSize: "2.2rem" }}
          >
            0
          </Typography>
          <Typography>Alerts</Typography>
          <Box
            sx={{
              backgroundColor: " #7ac38f",
              padding: "0.1rem",
              borderRadius: "0.3rem",
            }}
          >
            <Typography sx={{ color: "white" }}> 0% Object</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Zone;
