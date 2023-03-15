import "../../../App.css";

import SDHeader from "../../../components/SDHeader/SDHeader";
import { SDFullSideBar } from "../../../components/SDSideBar/SDSideBar";
import SDMain from "../../../components/SDMain/SDMain";

const LSHCContainer = () => {
  return (
    <div className="container">
      <div className="nav-full">SideBar</div>
      <div className="row-container">
        <div className="header-content">Header</div>
        <div className="content-header">Content</div>
      </div>
    </div>
  );
};

export default LSHCContainer;
