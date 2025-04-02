interface TitleBarProps {
  theme: string;
  handleFilterClick: (str: "All" | "Active" | "Inactive") => void;
}
function TitleBar({ theme, handleFilterClick }: TitleBarProps) {
  return (
    <div className="titleBar">
      <h1 className={"title-heading-" + theme}>Extensions List</h1>
      <div className={"button-list button-list-" + theme}>
        <button onClick={() => handleFilterClick("All")}>All</button>
        <button onClick={() => handleFilterClick("Active")}>Active</button>
        <button onClick={() => handleFilterClick("Inactive")}>Inactive</button>
      </div>
    </div>
  );
}

export default TitleBar;
