import PropTypes from "prop-types";
import "./style.scss";
export default function Checkbox(props) {
  const { disabled, onChangeHandler, customClass, fieldObj } = props;
  const { id, value, label, errorMsg, isValid } = fieldObj;
  let classname = customClass ? "chkbox " + props.customClass : "chkbox ";

  return (
    <span className="chkbox-item">
      <input
        type="checkbox"
        name={id}
        id={id}
        value={value}
        className={classname}
        disabled={disabled}
        onChange={onChangeHandler}
      />
      <label htmlFor={id}>{label}</label>
      {!isValid && <span className="error-msg">{errorMsg}</span>}
    </span>
  );
}
Checkbox.propTypes = {
  fieldObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    isRequired: PropTypes.bool
  }),
  onChangeHandler: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  disabled: PropTypes.bool
};
