import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";
import "react-datepicker/dist/react-datepicker.css";
export default function DateRangepicker(props) {
  const {
    id,
    label,
    value,
    isValid,
    errorMsg,
    isRequired,
    readOnly,
    format,
    toolTip,
    placeholder
  } = props.fieldObj;
  const { onDateSelectHandler, hideLabel, customClass, isClearable } = props;
  const onDateChangeHandler = (date) => {
    onDateSelectHandler(id, date);
  };
  const classname = customClass
    ? "text-input-field " + customClass
    : "text-input-field ";
  return (
    <div className="text-input-group">
      {!hideLabel && (
        <label>
          {label}
          {isRequired && <span className="required">*</span>}:
          {toolTip && toolTip !== "" && <Tooltip message={toolTip} />}
        </label>
      )}
      <DatePicker
        className={isValid ? classname : classname + " invalid"}
        name={id}
        selectsRange={true}
        startDate={value[0]}
        endDate={value[1]}
        dateFormat={format}
        readOnly={readOnly}
        onChange={(date) => onDateChangeHandler(date)}
        placeholder={placeholder}
        autoComplete="off"
        isClearable={isClearable}
      />
      {!isValid && <span className="error-msg">{errorMsg}</span>}
    </div>
  );
}
DateRangepicker.propTypes = {
  fieldObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.array.isRequired,
    isValid: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    isRequired: PropTypes.bool,
    readOnly: PropTypes.bool,
    pattern: PropTypes.string,
    toolTip: PropTypes.string
  }),
  onDateSelectHandler: PropTypes.func.isRequired,
  hideLabel: PropTypes.bool,
  customClass: PropTypes.string,
  isClearable: PropTypes.bool
};
