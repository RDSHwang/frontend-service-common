import { useContext } from "react";
import { menuContext } from "../constants/GlobalContextProvider";
import { PopUpContent } from "./WebServiceContent";

//내부 Content 컴포넌트 변경
export function ContentChange() {
  const { name } = useContext(menuContext);

  if (name === "웹 서비스 호출") {
    return <PopUpContent />;
  }
}
