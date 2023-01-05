import React, { useState } from "react";
import "./style.css";

const PLATFORMS = ["Instagram", "LinkedIn", "Twitter"];

const SelectBox = (props) => {
  const { label, options, value, id } = props;
  const [expanded, setExpanded] = useState(false);
  const [selections, setSelections] = useState([]);

  const toggleExpanded = () => {
    if (!expanded) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  const handleChange = (event) => {
    if (event.target.checked) {
      return setSelections([...selections, event.target.name]);
    }
    const filtered = selections.filter((name) => name !== event.target.name);
    return setSelections(filtered);
  };

  return (
    <div>
      <div onClick={toggleExpanded}>
        <label>{label}</label>
        <div
          className={`font-semibold cursor-pointer ${
            expanded ? "up-arrow" : "down-arrow"
          }`}
        >
          {selections.length
            ? selections.map((name, i) => (
                <span key={i}>
                  {i ? ", " : null}
                  {name}
                </span>
              ))
            : "None selected"}
        </div>
      </div>
      {expanded && (
        <div className="border-gray-200 border border-solid">
          {PLATFORMS.map((platform) => (
            <label htmlFor="one" className="block" key={platform}>
              <input
                type="checkbox"
                name={platform}
                value={platform}
                onChange={handleChange}
                className="m-3 cursor-pointer"
              />
              {platform}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectBox;
