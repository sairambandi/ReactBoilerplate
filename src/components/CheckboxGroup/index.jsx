import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";
import "./style.scss";
export default function CheckboxGroup(props) {
  const { onChangeHandler, customClass, fieldObj } = props;
  const { id, value, label, disabled, toolTip, options } = fieldObj;
  const [chkValue, setChkValue] = useState(value);
  useEffect(() => {
    setChkValue(value);
  }, [value]);
  const onCheckboxGroupChangeHndlr = (e) => {
    const ind = chkValue.indexOf(e.target.value);
    if (ind > -1) {
      chkValue.splice(ind, 1);
    } else {
      chkValue.push(e.target.value);
    }
    setChkValue(chkValue);
    onChangeHandler(id, chkValue);
  };
  let classname = customClass ? "radiobtn " + props.customClass : "radiobtn ";
  return (
    <span className="check-box-group">
      <label>
        {label}
        {toolTip && toolTip !== "" && <Tooltip message={toolTip} />}
      </label>
      {options.map((option, i) => {
        return (
          <span key={i} className="chk-item">
            <input
              type="checkbox"
              name={id}
              id={option.value}
              value={option.value}
              className={classname}
              disabled={disabled}
              checked={chkValue.indexOf(option.value) > -1}
              onChange={onCheckboxGroupChangeHndlr}
            />
            <label htmlFor={option.value}>{option.text}</label>
          </span>
        );
      })}
    </span>
  );
}
CheckboxGroup.propTypes = {
  fieldObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.array,
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
