import React, { useEffect, useState, useCallback } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import DemoComponent from "./DemoComponent";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import ObjectAlerts from "./ObjectAlerts";
import DriverAlerts from "./DriverAlerts";
import ObjectHealth from "./ObjectHealth";
import Fence from "./Fence";
import Address from "./Address";
import Zone from "./Zone";
import Average from "./Average";
import Fleet from "./Fleet";
import ObjectMode from "./ObjectMode";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const ResponsiveGridLayout = WidthProvider(Responsive);

const App = () => {
  const [value, setValue] = useState(true);
  const initialLayout = JSON.parse(localStorage.getItem("layout")) || {
    lg: [
      { i: "a", x: 0, y: 0, w: 4, h: 1 },
      { i: "b", x: 4, y: 0, w: 2, h: 0.5 },
      { i: "c", x: 8, y: 0, w: 4, h: 0.5 },
      { i: "d", x: 0, y: 1, w: 2, h: 0.5 },
      { i: "e", x: 4, y: 1, w: 4, h: 1 },
      { i: "f", x: 8, y: 1, w: 4, h: 1 },
      { i: "g", x: 0, y: 2, w: 2, h: 0.5 },
      { i: "h", x: 2, y: 2, w: 4, h: 0.5 },
      { i: "i", x: 6, y: 2, w: 2, h: 0.5 },
      { i: "j", x: 0, y: 3, w: 6, h: 1 },
    ],
  };
  console.log("rendering");
  const [layout, setLayout] = useState(initialLayout);

  useEffect(() => {
    // Save layout to local storage whenever it changes
    localStorage.setItem("layout", JSON.stringify(layout));
  }, [layout]);

  // Function to handle layout change
  // Function to handle layout change
  const onLayoutChange = useCallback((newLayout) => {
    localStorage.setItem("layout", JSON.stringify({ lg: newLayout }));
    // setLayout({ lg: newLayout });
  }, []);

  return (
    <Box
      sx={{
        width: "98%",
        marginLeft: "1.1rem",
        marginTop: "0.8rem",
        height: "98.2vh",
        overflowY: "auto",
      }}
      component={Paper}
    >
      {/* <Navbar /> */}
      <Box
        sx={{
          width: "98.1%",
          backgroundColor: "#b5592a",
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
          alignItems: "center",
          top: 0,
          position: "sticky",
          zIndex: "100",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "1.4rem", fontWeight: "500" }}
        >
          Dashboard
        </Typography>
        <Box>
          <IconButton>
            <FilterAltOutlinedIcon
              sx={{ color: "white", height: "2rem", width: "2.5rem" }}
            />
          </IconButton>
          <IconButton>
            <SettingsOutlinedIcon
              sx={{ color: "white", height: "2rem", width: "2.5rem" }}
            />{" "}
          </IconButton>
        </Box>
      </Box>
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 12 }}
        rowHeight={410}
        width={1200}
        isResizable={false}
        onLayoutChange={onLayoutChange}
      >
        <Box key="a" component={Paper}>
          {/* <DemoComponent color={"yellow"} /> */}
          <ObjectAlerts />
        </Box>
        <Box key="b" component={Paper} style={{ backgroundColor: " #7dd87d" }}>
          {/* <DemoComponent color={"green"} /> */}
          <Address />
        </Box>
        <Box key="c" component={Paper}>
          {/* <DemoComponent color={"red"} /> */}
          <Fleet />
        </Box>
        <Box key="d" component={Paper} style={{ backgroundColor: "#E6E6FA" }}>
          {/* <DemoComponent color={"blue"} /> */}
          <Fence />
        </Box>
        <Box
          key="e"
          component={Paper}
          //  style={{ backgroundColor: "violet" }}
        >
          {/* <DemoComponent color={"violet"} /> */}
          <DriverAlerts />
        </Box>
        <Box
          key="f"
          component={Paper}
          // style={{ backgroundColor: "lemonchiffon" }}
        >
          {/* <DemoComponent color={"lemonchiffon"} /> */}
          <ObjectHealth />
        </Box>
        <Box key="g" component={Paper} style={{ backgroundColor: "#aef4a4" }}>
          {/* <DemoComponent color={"blue"} /> */}
          <Zone />
        </Box>
        <Box
          key="h"
          component={Paper}
          // style={{ backgroundColor: "green" }}
        >
          {/* <DemoComponent color={"green"} /> */}
          <ObjectMode />
        </Box>
        <Box key="i" component={Paper} style={{ backgroundColor: "#fff" }}>
          {/* <DemoComponent color={"red"} /> */}
          <Average />
        </Box>
      </ResponsiveGridLayout>
    </Box>
  );
};

export default App;
