import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

interface AttributionProps {}

function Attribution({}: AttributionProps) {
  const theme = useContext(ThemeContext);
  return (
    <div className={"attribution attribution-" + theme}>
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge"> Frontend Mentor</a>
      . Coded by <a href="#">@sortaships</a>.
    </div>
  );
}

export default Attribution;
