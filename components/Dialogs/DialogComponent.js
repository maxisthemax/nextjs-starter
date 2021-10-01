//*lodash

//*components
import { CustomIcon } from "components/Icons";

//*material-ui
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";

//*assets

//*redux

//*utils

//*helpers

//*style

//*custom components

function DialogComponent({
  title,
  open,
  handleCancel,
  handleOk,
  child,
  size = "sm",
  canCloseOutside = true,
}) {
  //*define

  //*states

  //*const

  //*let

  //*ref

  //*useEffect

  //*functions

  return (
    <Dialog
      open={open}
      maxWidth={size}
      fullWidth={true}
      onClose={canCloseOutside ? handleCancel : null}
    >
      <AppBar sx={{ position: "relative" }} color="primary">
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {title}
              </Typography>
            </Box>
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCancel}
                aria-label="close"
              >
                <CustomIcon icon="close" color="white" />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <DialogContent dividers>
        <Box>{child}</Box>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DialogComponent;
