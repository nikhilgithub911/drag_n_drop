// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// // import RoomIcon from "@mui/icons-material/Room";
// import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
// import { Link } from "react-router-dom";
// import { Typography } from "@mui/material";

// // importing images
// import SBI_LOGO from "../assets/logo.svg";
// import SBI_LOGO_ICON from "../assets/sbi-logo-icon.svg";

// const drawerWidth = 245;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} - 15px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} - 15px)`,
//   },
// });

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   zIndex: theme.zIndex.modal + 1,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function Sidenav({ open: propOpen, onClose }) {
//   // export default function Sidenav() {
//   const [open, setOpen] = useState(false);

//   const toggleSidebarOpenOnHover = () => {
//     setOpen(true);
//   };
//   const toggleSidebarCloseOnHover = () => {
//     setOpen(false);
//   };
//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />

//       <Drawer
//         onMouseEnter={toggleSidebarOpenOnHover}
//         onMouseLeave={toggleSidebarCloseOnHover}
//         onClose={toggleSidebarCloseOnHover}
//         variant="permanent"
//         open={open}
//         PaperProps={{
//           sx: {
//             backgroundColor: "#b5592a",
//             color: "#ffffff",
//           },
//         }}
//       >
//         <List>
//           <ListItem>
//             {/* {open ? (
//               <img src={SBI_LOGO} alt="SBI LOGO" />
//             ) : (
//               <img src={SBI_LOGO_ICON} alt="SBI LOGO ICON" />
//             )} */}

//             {/* <img src={SBI_LOGO_ICON} alt="SBI LOGO ICON" /> */}
//           </ListItem>
//           <ListItem disablePadding>
//             <ListItemButton
//               component={Link}
//               to="/tabledata"
//               sx={{
//                 minHeight: 48,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 px: 2.5,
//                 mt: 7,
//               }}
//             >
//               <ListItemIcon
//                 sx={{
//                   minWidth: 0,
//                   mr: open ? 3 : "auto",
//                   justifyContent: "center",
//                 }}
//               >
//                 <SpaceDashboardIcon sx={{ color: "#fff", ml: 1 }} />
//               </ListItemIcon>
//               <ListItemText
//                 primary="Dashboard"
//                 sx={{ opacity: open ? 1 : 0 }}
//               />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Drawer>
//     </Box>
//   );
// }
import React, { useState } from "react";
import { Box } from "@mui/system";
// import rapidsoft from "./rapidsoft.png"; // assuming the logo file is in the same directory as this component
import rapidsoft from "../assets/rapidsoft.png";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(false);

  const handleDashboardClick = () => {
    setSelected(true);
  };
  return (
    <Box
      sx={{
        // height: "100vh",
        backgroundColor: "#b5592a",
        width: "8rem",
        // height: "100vh",
        paddingTop: "1rem",
        // overflowY: "auto",
      }}
    >
      {/* Sidebar */}
      {/* <Box sx={{ position: "fixed" }}> */}
      <Box
        sx={{
          borderRadius: "50%",
          // backgroundColor: "#B22222",
          backgroundColor: "#9d4821",
          // opacity: "0.3",
          height: "7rem",
          width: "7rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          marginX: "auto",
        }}
      >
        <img
          src={rapidsoft}
          alt="Rapidsoft Logo"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </Box>

      <Link to="/dash" style={{ textDecoration: "none" }}>
        <Box
          onClick={handleDashboardClick}
          className={selected ? "selected" : ""}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
            backgroundColor: selected ? "rgba(0, 0, 0, 0.5)" : "transparent",
          }}
        >
          <SpaceDashboardIcon
            sx={{
              color: "white",
              height: "3rem",
              width: "3rem",
              cursor: "pointer",
            }}
          />
          <Typography sx={{ color: "white" }}>Dashboard</Typography>
        </Box>
      </Link>
    </Box>
    // </Box>
  );
};

export default Sidebar;
