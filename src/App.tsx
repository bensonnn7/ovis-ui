import React from "react";
import Button from "./components/Button/Button";
import Alert from "./components/Alert/Alert";
import Menu from "./components/Menu/Menu";
import MenuItem from "./components/Menu/MenuItem";
import SubMenu from "./components/Menu/SubMenu";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const App: React.FC = () => {
  return (
    <>
      <Menu
      // mode="vertical"
      >
        <MenuItem>link1</MenuItem>
        <MenuItem disabled>link2</MenuItem>
        <MenuItem>link3</MenuItem>
        <SubMenu title="Sub Menu">
          <MenuItem>sub menu 1</MenuItem>
          <MenuItem>sub menu 2</MenuItem>
          <MenuItem>sub menu 3</MenuItem>
        </SubMenu>
      </Menu>
      {/* <Button>Hello</Button>
      <Button disabled autoFocus>
        Disable button
      </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>
        small danger
      </Button>
      <Button btnType={ButtonType.Link} href="www.google.com">
        Link
      </Button>
      <Button btnType={ButtonType.Link} href="www.google.com" disabled>
        disable Link
      </Button>
      <Button btnType={"primary"} size={"lg"}>
        large parimary
      </Button> 
      <Button btnType={"primary"} size={"sm"}>
        large parimary
      </Button> */}
      {/* <Alert title="this is default" onClose={handleClose} />
      <Alert
        title="this is danger"
        type="danger"
        description="this is a long description"
      />
      <Alert title="this is warning" type="warning"/>
      <Alert title="this is success" type=`"success"/>  */}
    </>
  );
};

export default App;
