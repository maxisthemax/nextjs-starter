import PropsTypes from "prop-types";

//*material-ui
import Icon from "@mui/material/Icon";
import { makeStyles } from "@mui/styles";

//*style
const useStyles = makeStyles(() => ({
  icon: {
    display: "flex",
    alignItems: "center",
  },
}));

function CustomIcon({
  active = true,
  icon,
  size = "default",
  color,
  width = "auto",
  height = "auto",
}) {
  //*define
  const classes = useStyles();

  return (
    <Icon
      className={classes.icon}
      fontSize={size}
      style={{
        width: width,
        height: height,
        color: color ? color : "",
        opacity: active ? "1" : "0.4",
      }}
      color={active ? "primary" : "action"}
    >
      {icon}
    </Icon>
  );
}

CustomIcon.propTypes = {
  active: PropsTypes.bool,
  icon: PropsTypes.string,
  size: PropsTypes.string,
  color: PropsTypes.string,
  width: PropsTypes.number,
  height: PropsTypes.number,
};

export default CustomIcon;
