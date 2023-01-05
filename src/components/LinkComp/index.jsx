import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./style.css";
export default function LinkComp(props) {
  let classname = props.customClass ? "btn " + props.customClass : "btn ";
  if (props.showLoader) {
    classname += " loading";
  }
  return (
    <Link className={classname} to="/tolink">
      {props.linkTxt}
    </Link>
  );
}
LinkComp.propTypes = {
  linkTxt: PropTypes.string.isRequired,
  customClass: PropTypes.string
};
