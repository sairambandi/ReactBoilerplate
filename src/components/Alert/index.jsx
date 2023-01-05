import PropTypes from "prop-types";
import "./style.css";
export default function Alert(props) {
  const { alertTxt, customClass, type } = props;
  let classname = customClass ? "alert " + customClass : "alert ";

  switch (type) {
    case "ERROR":
      classname += " error";
      break;
    case "SUCCESS":
      classname += " success";
      break;
    case "INFO":
      classname += " info";
      break;
    case "WARNING":
      classname += " warning";
      break;
    default:
      break;
  }
  return (
    <div role="alert" className={classname}>
      {alertTxt}
    </div>
  );
}
Alert.propTypes = {
  alertTxt: PropTypes.string.isRequired,
  customClass: PropTypes.string,
  type: PropTypes.string.isRequired
};
