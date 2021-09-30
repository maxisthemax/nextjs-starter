import { useRef } from "react";
//*lodash

//*components
import MainAppBar from "./MainAppBar";
import MainDrawer from "./MainDrawer";

//*material-ui
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

//*assets

//*redux

//*utils

//*helpers

//*style

//*custom components

const drawerWidth = 240;

function Main({ children }) {
  //*define

  //*states

  //*const

  //*let

  //*ref
  const drawerRef = useRef();

  //*useEffect

  //*functions

  return (
    <Box sx={{ display: "flex" }}>
      <MainAppBar
        handleOpenDrawer={drawerRef?.current?.handleOpenDrawer}
        handleCloseDrawer={drawerRef?.current?.handleCloseDrawer}
      />
      <MainDrawer drawerWidth={drawerWidth} ref={drawerRef} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div>{children}</div>
      </Box>
    </Box>
  );
}

export default Main;
