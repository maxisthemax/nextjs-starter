import { useState, useCallback } from "react";

//*lodash

//*components
import DialogComponent from "./DialogComponent";

//*material-ui

//*assets

//*redux

//*utils

//*helpers

//*style

//*custom components

const useDialog = () => {
  const [open, setOpen] = useState(false);

  //*functions
  const handleOpenDialog = () => {
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };

  const Dialog = useCallback(
    ({ ...props }, child) => {
      return (
        <DialogComponent
          open={open}
          handleCancel={() => setOpen(false)}
          {...props}
        >
          {child}
        </DialogComponent>
      );
    },
    [open]
  );

  return { isOpen: open, handleOpenDialog, handleCloseDialog, Dialog };
};

export default useDialog;
