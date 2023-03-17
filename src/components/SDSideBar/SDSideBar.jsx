import "../../App.css";

const SDSideBar = ({ children }) => {
  return (
    <>
      <div className="nav">{children}</div>
    </>
  );
};

const SDFullSideBar = ({ children }) => {
  return (
    <>
      <div className="nav-full">{children}</div>
    </>
  );
};

export { SDSideBar, SDFullSideBar };
