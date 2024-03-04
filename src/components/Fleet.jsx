import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// fuel icon
import LocalGasStationOutlinedIcon from "@mui/icons-material/LocalGasStationOutlined";

const Fleet = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        // border: "1px solid black",
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          //   border: "1px solid black",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>Fleet Fuel</Typography>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              size="small"
              sx={{ width: "12rem" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "1rem",
          //   border: "1px solid black",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            // border: "1px solid black",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Total</Typography>
          <Typography sx={{ fontWeight: "600" }}>Fuel Refill</Typography>
          <Box
            sx={{
              //   border: "1px solid black",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <LocalGasStationOutlinedIcon
              sx={{ color: "#7dd87d", width: "3rem", height: "2.5rem" }}
            />
            {/* Box to the right of fuel icon */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "#7dd87d" }}>0 ltr</Typography>
              <Typography sx={{ color: "#7dd87d" }}>[0 times]</Typography>
            </Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          sx={{
            // border: "1px solid black",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ fontWeight: "600" }}>Total</Typography>
          <Typography sx={{ fontWeight: "600" }}>Fuel Drain</Typography>
          <Box
            sx={{
              //   border: "1px solid black",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <LocalGasStationOutlinedIcon
              sx={{ color: "red", width: "3rem", height: "2.5rem" }}
            />
            {/* Box to the right of fuel icon */}
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={{ color: "red" }}>0 ltr</Typography>
              <Typography sx={{ color: "red" }}>[0 times]</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Fleet;
