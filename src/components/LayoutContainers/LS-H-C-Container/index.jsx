import "../../../App.css";

import SDHeader from "../../../components/SDHeader/SDHeader";
import { SDFullSideBar } from "../../../components/SDSideBar/SDSideBar";
import SDMain from "../../../components/SDMain/SDMain";

const LSHCContainer = ({ sidebar, header, content }) => {
  return (
    <div className="container">
      <div className="nav-full">{sidebar}</div>
      <div className="row-container">
        <div className="header-content">{header}</div>
        <div className="content-header">{content}</div>
      </div>
    </div>
  );
};

export default LSHCContainer;
