import PropTypes from "prop-types";
import "./style.css";
export default function PrimaryButton(props) {
  let classname = props.customClass
    ? "btn btn-primary " + props.customClass
    : "btn btn-primary ";
  if (props.showLoader) {
    classname += " loading";
  }
  return (
    <button
      className={classname}
      disabled={props.showLoader ? "disabled" : props.disabled}
      onClick={props.onClickHandler}
    >
      {props.btnTxt}
    </button>
  );
}
PrimaryButton.propTypes = {
  btnTxt: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  showLoader: PropTypes.bool,
  customClass: PropTypes.string
};
