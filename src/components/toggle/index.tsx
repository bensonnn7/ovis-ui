import { FC } from "react";
import Toggle, { ToggleBaseProps } from "./toggle";
import Switch, { SwitchBaseProps } from "./switch";
import { On, SwitchOnAndOffProps } from "./switch";
export { default as ToggleBaseProps } from "./toggle";

export type IToggleComponent = FC<ToggleBaseProps> & {
  On: FC<SwitchOnAndOffProps>;
  Switch: FC<SwitchBaseProps>;
};

const TransToggle = Toggle as IToggleComponent;

TransToggle.Switch = Switch;
TransToggle.On = On;

export default TransToggle;
