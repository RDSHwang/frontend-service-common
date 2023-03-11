import "../../../App.css";

import SDHeader from "../../../components/SDHeader/SDHeader";
import SDSideBar from "../../../components/SDSideBar/SDSideBar";
import SDMain from "../../../components/SDMain/SDMain";
import SDFooter from "../../../components/SDFooter/SDFooter";

const HLSCContainer = () => {
  return (
    <div>
      <SDHeader>Header</SDHeader>
      <div className="header-main-footer-content">
        <SDSideBar>SideBar</SDSideBar>
        <SDMain>Content</SDMain>
      </div>
      <SDFooter>Footer</SDFooter>
    </div>
  );
};

export default HLSCContainer;
