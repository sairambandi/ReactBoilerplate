import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

export default function DataTable(props) {
  const [thData, setThData] = useState(props.headings);
  const [processedData, setProcessedData] = useState(props.displayData);

  const getNextOrder = (order = "NONE") => {
    const ary = ["ASC", "DESC", "NONE"];
    let i = ary.indexOf(order);
    i += 1;
    if (i === 3) {
      i = 0;
    }
    return ary[i];
  };

  const setSortedColObj = (selector, newOrder) => {
    const cols = thData.map((item) => {
      if (item.selector === selector) {
        return Object.assign(item, { order: newOrder });
      } else {
        return Object.assign(item, { order: "" });
      }
    });
    setThData([...cols]);
  };

  const onSortClick = (e) => {
    const { name, value } = e.target;
    let data = JSON.parse(JSON.stringify(props.displayData));
    const newOrder = getNextOrder(value);
    switch (newOrder) {
      case "DESC":
        data = data.sort((a, b) => a[name] < b[name] && -1);
        break;
      case "ASC":
        data = data.sort((a, b) => b[name] < a[name] && -1);
        break;
      default:
        break;
    }

    setSortedColObj(name, newOrder);
    setProcessedData([...data]);
  };

  const generateHeaders = (colKeys) => {
    var heads;
    heads = colKeys.map((colKey, index) => {
      if (colKey.sortable)
        return (
          <th key={`th_${index}`}>
            <button
              name={colKey.selector}
              value={colKey.order ? colKey.order : "NONE"}
              onClick={onSortClick}
            >
              {colKey.label}
              <span className={colKey.order ? colKey.order : "NONE"} />
            </button>
          </th>
        );
      else return <th key={`th_${index}`}>{colKey.label}</th>;
    });
    return <tr>{heads}</tr>;
  };

  const generateRowData = (colKeys, rowData, index) => {
    const cells = colKeys.map((colKey, index) => {
      if (colKey.isActionable) {
        return (
          <td className="table-actions" key={`td_${index}_${colKey.selector}`}>
            {actionButtons(rowData, index)}
          </td>
        );
      } else {
        return (
          <td key={`td_${index}_${colKey.selector}`}>
            {" "}
            {rowData[colKey.selector]}{" "}
          </td>
        );
      }
    });
    return <>{cells}</>;
  };

  const actionButtons = (item, index) => {
    return (
      <>
        <span onClick={() => onEditClick(index, item)}>Edit</span>
      </>
    );
  };

  const onEditClick = (i, item) => {
    props.onActionClick(item);
  };

  return (
    <div className="data-table">
      <table cellPadding="0" cellSpacing="0">
        <thead>{generateHeaders(thData)}</thead>
        <tbody>
          {processedData.map((item, index) => (
            <tr key={index}>{generateRowData(thData, item, index)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
DataTable.propTypes = {
  headings: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      selector: PropTypes.string.isRequired,
      sortable: PropTypes.bool,
      isActionable: PropTypes.bool
    })
  ).isRequired,
  displayData: PropTypes.array.isRequired,
  onActionClick: PropTypes.func
};
