import "../../../App.css";

import SDHeader from "../../../components/SDHeader/SDHeader";
import { SDSideBar } from "../../../components/SDSideBar/SDSideBar";
import SDMain from "../../../components/SDMain/SDMain";

const HLSCContainer = () => {
  return (
    <div>
      <SDHeader>Header</SDHeader>
      <div className="header-main-content">
        <SDSideBar>SideBar</SDSideBar>
        <SDMain>Content</SDMain>
      </div>
    </div>
  );
};

export default HLSCContainer;
