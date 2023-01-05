import PropTypes from "prop-types";
import Tooltip from "../Tooltip";
import "./style.scss";

export default function TextField(props) {
  const {
    id,
    label,
    value,
    isValid,
    errorMsg,
    isRequired,
    readOnly,
    pattern,
    toolTip,
    placeholder
  } = props.fieldObj;
  const {
    onChangeHandler,
    onBlurHandler,
    hideLabel,
    type,
    customClass
  } = props;
  const classname = customClass
    ? "text-input-field " + customClass
    : "text-input-field ";
  return (
    <div className="text-input-group">
      {!hideLabel && (
        <label htmlFor={id}>
          {label}
          {isRequired && <span className="required">*</span>}:
          {toolTip && toolTip !== "" && <Tooltip message={toolTip} />}
        </label>
      )}
      <input
        type={type ? type : "text"}
        className={isValid ? classname : classname + " invalid"}
        name={id}
        id={id}
        value={value}
        pattern={pattern}
        readOnly={readOnly}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        placeholder={placeholder}
        autoComplete="off"
      />
      {!isValid && <span className="error-msg">{errorMsg}</span>}
    </div>
  );
}
TextField.propTypes = {
  fieldObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    isRequired: PropTypes.bool,
    readOnly: PropTypes.bool,
    pattern: PropTypes.string,
    toolTip: PropTypes.string,
    placeholder: PropTypes.string
  }),
  onBlurHandler: PropTypes.func,
  onChangeHandler: PropTypes.func.isRequired,
  hideLabel: PropTypes.bool,
  customClass: PropTypes.string
};
