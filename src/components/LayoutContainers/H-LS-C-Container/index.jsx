import "../../../App.css";

import SDHeader from "../../../components/SDHeader/SDHeader";
import SDSideBar from "../../SDSideBar/SDSideBar";
import SDFooter from "../../SDFooter/SDFooter";

const HLSCContainer = () => {
  return (
    <div>
      <SDHeader>Header</SDHeader>
      <div className="main-content">
        <SDSideBar>SideBar</SDSideBar>
        <main className="main">Content</main>
      </div>
      <SDFooter>Footer</SDFooter>
    </div>
  );
};

export default HLSCContainer;
