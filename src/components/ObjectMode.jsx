import { Box, Typography } from "@mui/material";
import React from "react";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ObjectMode = () => {
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
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: "600" }}>Object Mode</Typography>
        <AcUnitOutlinedIcon />
      </Box>

      <Box sx={{ width: "100%", marginTop: "0.9rem", overflow: "auto" }}>
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>
    </Box>
  );
};

export default ObjectMode;
