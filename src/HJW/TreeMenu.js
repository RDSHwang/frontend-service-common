import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { menuDataList } from "./List.tsx";
import {
  menuDispatchContext,
  popUpContext,
  popUpDispatchContext,
} from "./GlobalContextProvider";
import { useContext } from "react";

//사이드 메뉴
function MenuList() {
  const menuDispatch = useContext(menuDispatchContext);
  const popupDispatch = useContext(popUpDispatchContext);

  function PopDispatch(id) {
    if (id != "root" && id != "1" && id != "2" && id != "3") {
      popupDispatch({ type: "Open" });
    }
  }

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={nodes.name}
      sx={{ width: "auto", overflow: "hidden" }}
      onClick={() => {
        menuDispatch({ type: "ListUp", menuName: nodes.name });
        PopDispatch(nodes.id);
      }}
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={["root"]}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      {renderTree(menuDataList)}
    </TreeView>
  );
}

export default MenuList;
