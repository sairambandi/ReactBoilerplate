import "./style.css";
export default function Tooltip(props) {
  const { message } = props;
  return (
    <span className="tooltip">
      <i>i</i>
      <span className="tooltiptext">{message}</span>
    </span>
  );
}
