import PropsTypes from "prop-types";

//*material-ui
import Icon from "@mui/material/Icon";

//*style

function CustomIcon({
  active = true,
  icon,
  size = "default",
  color,
  width = "auto",
  height = "auto",
}) {
  //*define

  return (
    <Icon
      fontSize={size}
      style={{
        width: width,
        height: height,
        color: color ? color : "",
        opacity: active ? "1" : "0.4",
        display: "flex",
        alignItems: "center",
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
