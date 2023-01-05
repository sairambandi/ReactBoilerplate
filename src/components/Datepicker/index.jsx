import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";
import "react-datepicker/dist/react-datepicker.css";
export default function Datepicker(props) {
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
    placeholder,
    showBusinessDaysOnly
  } = props.fieldObj;
  const { onDateSelectHandler, hideLabel, customClass } = props;
  const onDateChangeHandler = (date) => {
    onDateSelectHandler(id, date);
  };
  const classname = customClass
    ? "text-input-field " + customClass
    : "text-input-field ";
  // const isWeekday = (date) => {
  //   const day = getDay(date);
  //   return day !== 0 && day !== 6;
  // };
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
        selected={value}
        dateFormat={format}
        readOnly={readOnly}
        // filterDate={showBusinessDaysOnly && isWeekday}
        onChange={(date) => onDateChangeHandler(date)}
        placeholder={placeholder}
        autoComplete="off"
      />
      {!isValid && <span className="error-msg">{errorMsg}</span>}
    </div>
  );
}
Datepicker.propTypes = {
  fieldObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
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
  showBusinessDaysOnly: PropTypes.bool
};
