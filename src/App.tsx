import React from "react";
import Toggle from "./components/toggle";
import Switch from "./components/toggle/switch";

import Button from "./components/Button";
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
      <Toggle onToggle={(on) => console.log("toggle switch", on)}>
        <Toggle.Switch />
        <Toggle.On>123</Toggle.On>
      </Toggle>
      {/* <Button>Hello</Button>
      <Button disabled>Disable button</Button>
      <Button btnType={"danger"} size={"sm"}>
        small danger
      </Button>
      <Button btnType={"link"} href="www.google.com">
        Link
      </Button>
      <Button btnType={"link"} href="www.google.com" disabled>
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
