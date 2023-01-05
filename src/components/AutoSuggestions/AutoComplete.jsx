import "./style.scss";
export default function AutoComplete({
  isVisible,
  suggestions,
  handleSuggestionClick
}) {
  return (
    <div className={`${isVisible ? "show suggestion-box" : "suggestion-box"}`}>
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => handleSuggestionClick(item)}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
