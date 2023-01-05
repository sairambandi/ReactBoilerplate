import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import AutoComplete from "./AutoComplete";
import useOutsideClick from "./OutsideClickHndlr";

const AutoSuggestions = ({
  fieldObj,
  getSuggestionOptions,
  onSuggestionSelect
}) => {
  const {
    id,
    label,
    customClass,
    isValid,
    errorMsg,
    isRequired,
    suggestions,
    placeholder
  } = fieldObj;
  const [documentRef, isVisible, setIsVisible] = useOutsideClick();
  const [searchTerm, setSearchTerm] = useState("");
  const ref = useRef();
  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  };

  useEffect(() => {
    ref.current = debounce(getSuggestions, 300);
  });

  useEffect(() => {
    if (suggestions.length > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [suggestions, setIsVisible]);

  const handleSearch = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setSearchTerm(value);
    ref.current(value);
  };

  const getSuggestions = (searchValue) => {
    getSuggestionOptions(searchValue);
  };

  const handleSuggestionClick = (selectedOption) => {
    onSuggestionSelect(selectedOption);
    setSearchTerm(selectedOption.text);
    setIsVisible(false);
  };

  const classname = customClass
    ? "text-input-field " + customClass
    : "text-input-field ";
  return (
    <div className="suggestion-field-group">
      <div className="text-input-group">
        <label>
          {label}
          {isRequired && <span className="required">*</span>}:
        </label>
        <input
          type="text"
          className={isValid ? classname : classname + " invalid"}
          value={searchTerm}
          name={id}
          onChange={handleSearch}
          autoComplete="off"
          placeholder={placeholder}
        />
      </div>
      <div ref={documentRef} className="suggestion-sec">
        {isVisible && (
          <AutoComplete
            isVisible={isVisible}
            suggestions={suggestions}
            handleSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
      {!isValid && <span className="error-msg">{errorMsg}</span>}
    </div>
  );
};
AutoSuggestions.propTypes = {
  fieldObj: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    isRequired: PropTypes.bool,
    toolTip: PropTypes.string,
    placeholder: PropTypes.string,
    suggestions: PropTypes.array
  }).isRequired,
  onBlurHandler: PropTypes.func,
  getSuggestionOptions: PropTypes.func.isRequired,
  onSuggestionSelect: PropTypes.func.isRequired,
  hideLabel: PropTypes.bool,
  customClass: PropTypes.string
};

export default AutoSuggestions;
