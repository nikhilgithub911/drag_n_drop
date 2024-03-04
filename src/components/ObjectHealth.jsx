import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

// import IconButton from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const ObjectHealth = () => {
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
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>Object Health</Typography>
        <Box>
          <IconButton>
            <FileCopyIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          //   border: "1px solid black",
          height: "80%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.4rem",
            fontWeight: "600",
            color: "gray",
          }}
        >
          No Record Found
        </Typography>
      </Box>
    </Box>
  );
};

export default ObjectHealth;
