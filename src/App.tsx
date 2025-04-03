import { useEffect, useState } from "react";
import Attribution from "./components/Attribution";
import HeaderBar from "./components/HeaderBar";
import ExtensionCard from "./components/ExtensionCard";
import TitleBar from "./components/TitleBar";
import { Theme, ThemeEnum, ThemeContext } from "./contexts/ThemeContext";

type ExtData = {
  name: string;
  description: string;
  logo: string;
  isActive: boolean;
};

const darkBackgroundGradient =
  "linear-gradient(180deg, #040918 0%, #091540 100%)";
const lightBackgroundGradient =
  "linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%)";

function App() {
  const [extensionData, setExtensionData] = useState<ExtData[]>([]);
  const [filteredExtensionData, setFilteredExtensionData] = useState<ExtData[]>(
    []
  );
  const [theme, setTheme] = useState<Theme>(ThemeEnum.LIGHT);

  function handleCardRemoveClick(name: string): void {
    setExtensionData((prev) =>
      prev.filter((ext: ExtData) => ext.name !== name)
    );
    setFilteredExtensionData((prev) =>
      prev.filter((ext: ExtData) => ext.name !== name)
    );
  }

  function handleCardSliderClick(name: string): void {
    setExtensionData((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );

    setFilteredExtensionData((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  }

  function handleFilterClick(filter: "All" | "Active" | "Inactive"): void {
    setFilteredExtensionData(() => {
      switch (filter) {
        case "Active":
          return extensionData.filter((x: ExtData) => x.isActive === true);
        case "Inactive":
          return extensionData.filter((x: ExtData) => x.isActive === false);
        default:
          return extensionData;
      }
    });
  }

  function setBackground(theme: string): void {
    let bg;
    if (theme === ThemeEnum.LIGHT) {
      bg = darkBackgroundGradient;
      setTheme(ThemeEnum.DARK);
    } else {
      bg = lightBackgroundGradient;
      setTheme(ThemeEnum.LIGHT);
    }
    document.body.style.backgroundImage = bg;
  }

  useEffect(() => {
    fetch("../data.json")
      .then((resp) => resp.json())
      .then((jsonData) => {
        setExtensionData(jsonData);
        setFilteredExtensionData(jsonData);
      })
      .catch((e) => console.error("Failed to load json data", e));
  }, []);

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <HeaderBar onIconClick={() => setBackground(theme)} />
        <TitleBar handleFilterClick={handleFilterClick} theme={theme} />
        <div className="cardgrid">
          {filteredExtensionData.length ? (
            filteredExtensionData.map((extension: ExtData) => (
              <ExtensionCard
                name={extension.name}
                description={extension.description}
                logo={extension.logo}
                key={extension.name}
                isActive={extension.isActive}
                handleRemoveClick={handleCardRemoveClick}
                handleSliderClick={handleCardSliderClick}
              />
            ))
          ) : (
            <h2>No results</h2>
          )}
        </div>
        <Attribution />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
