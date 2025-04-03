import { useContext } from "react";
import { Theme, ThemeContext } from "../contexts/ThemeContext";

interface ExtensionCardProps {
  logo?: string;
  name: string;
  description: string;
  isActive?: boolean;
  handleRemoveClick: (name: string) => void;
  handleSliderClick: (name: string) => void;
}

function ExtensionCard({
  name,
  logo,
  description,
  isActive,
  handleRemoveClick,
  handleSliderClick,
}: ExtensionCardProps) {
  const theme = useContext<Theme>(ThemeContext);
  return (
    <div className={"card card-" + theme}>
      <div className="card-icon">
        <img src={`${logo}`} />
      </div>
      <div className={"cardContent" + theme}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="cardActions">
        <button
          className={"cardRemoveButton card-remove-btn-" + theme}
          onClick={() => handleRemoveClick(name)}
        >
          Remove
        </button>
        <label className="card-toggle">
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => handleSliderClick(name)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default ExtensionCard;
