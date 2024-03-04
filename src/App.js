import { Box } from "@mui/material";
import "./App.css";
// import GridLayout from "../trash/GridLayout";
// import Layout from "../trash/Layout";
import Rainbow from "./components/Rainbow";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router";
function App() {
  return (
    <div className="App">
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flexGrow: 1 }}>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Navigate to="/dash" />}></Route>
            <Route path="/dash" element={<Rainbow />}></Route>
          </Routes>
        </div>
        {/* <Rainbow /> */}
      </Box>
    </div>
  );
}

export default App;

// set the layout to local storage
// adjust the design of the small cards(done)
// manage the height for side bar(done)
// make the side bar behave like routes(done)
// the black colour should stay when dashboard is selected(done)
// sidebar position fixed adjustment(not required)
// colour change for logo
// dashboard parent container to have a fixed height and content should scroll inside of it and not outside

// change dimensions for different devices
// progress bar adjustment
