import PropTypes from "prop-types";
import "./style.css";
export default function SecButton(props) {
  let classname = props.customClass
    ? "btn btn-sec " + props.customClass
    : "btn btn-sec ";
  if (props.showLoader) {
    classname += " loading";
  }
  return (
    <button
      disabled={props.showLoader ? "disabled" : props.disabled}
      className={classname}
      onClick={props.onClickHandler}
    >
      {props.btnTxt}
    </button>
  );
}
SecButton.propTypes = {
  btnTxt: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  showLoader: PropTypes.bool,
  customClass: PropTypes.string
};
