import { useState, useImperativeHandle, forwardRef } from "react";
import {
  usePopupState,
  bindTrigger,
  bindMenu,
} from "material-ui-popup-state/hooks";
import PropsTypes from "prop-types";

//*lodash
import find from "lodash/find";

//*components

//*material-ui
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

//*assets

//*redux

//*utils

//*helpers
import { getAllMonths } from "helpers/dateHelpers";

//*style

//*custom components

function MonthButton({ defaultMonth = 1 }, ref) {
  //*ref

  //*define
  const popupState = usePopupState({
    variant: "popover",
    popupId: "monthsMenu",
  });

  //*states
  const [monthState, setMonthState] = useState(defaultMonth);

  //*const
  const allMonths = getAllMonths();

  //*let

  //*useEffect

  //*functions
  const handleMonthChange = (month) => {
    setMonthState(month);
    popupState.close();
  };

  //*useImperativeHandle
  useImperativeHandle(
    ref,
    () => ({
      getSelectedMonth: () => {
        return monthState;
      },
    }),
    [monthState]
  );

  return (
    <>
      <Button color="primary" variant="contained" {...bindTrigger(popupState)}>
        {find(allMonths, { value: monthState }).name}
      </Button>
      <Menu {...bindMenu(popupState)}>
        {allMonths &&
          allMonths.map(({ value, name }) => (
            <MenuItem
              selected={monthState === value}
              key={value}
              onClick={() => handleMonthChange(value)}
            >
              {name}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
}

MonthButton.propTypes = {
  defaultMonth: PropsTypes.number,
};

export default forwardRef(MonthButton);
