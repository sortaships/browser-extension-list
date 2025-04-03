import { useContext } from "react";
import { Theme, ThemeContext } from "../contexts/ThemeContext";

interface HeaderBarProps {
  onIconClick: () => void;
}

function HeaderBar({ onIconClick }: HeaderBarProps) {
  const theme = useContext<Theme>(ThemeContext);
  const logoSrc =
    theme === "light"
      ? "./assets/images/logo.svg"
      : "./assets/images/logo-dark.svg";
  return (
    <div className={theme + " headerBarContainer"}>
      <img src={logoSrc} />
      <input
        className={"theme-icon-" + theme}
        type="image"
        src={
          theme === "light"
            ? "./assets/images/icon-moon.svg"
            : "./assets/images/icon-sun.svg"
        }
        onClick={() => onIconClick()}
      />
    </div>
  );
}

export default HeaderBar;
