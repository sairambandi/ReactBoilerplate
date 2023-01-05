import PropTypes from "prop-types";
import Tooltip from "../Tooltip";
import "./style.scss";
export default function RadioGroup(props) {
  const { onChangeHandler, customClass, fieldObj } = props;
  const { id, value, label, toolTip, options } = fieldObj;
  let classname = customClass ? "radiobtn " + props.customClass : "radiobtn ";
  return (
    <span className="radio-group">
      <label>
        {label}
        {toolTip && toolTip !== "" && <Tooltip message={toolTip} />}
      </label>
      {options.map((option, i) => {
        return (
          <span key={i} className="radio-item">
            <input
              type="radio"
              name={id}
              id={option.value}
              value={option.value}
              className={classname}
              checked={option.value === value}
              onChange={onChangeHandler}
            />
            <label htmlFor={option.value}>{option.text}</label>
          </span>
        );
      })}
    </span>
  );
}
RadioGroup.propTypes = {
  fieldObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    toolTip: PropTypes.string,
    isRequired: PropTypes.bool,
    options: PropTypes.array
  }),
  onChangeHandler: PropTypes.func.isRequired,
  customClass: PropTypes.string,
  disabled: PropTypes.bool
};
