/* eslint-disable react/prop-types */
import React, { FC, useContext, ReactNode } from "react";
import classNames from "classnames";
import { ToggleContext } from "./toggle";

export interface SwitchBaseProps {
  className?: string;
}

// const Switch: FC<SwitchBaseProps> = ({ on, handleToggle, className }) => {
const Switch: FC<SwitchBaseProps> = (props) => {
  const { on, handleToggle } = useContext(ToggleContext);
  //   const classes = classNames("switch-btn", className, {
  const classes = classNames("switch-btn", {
    "switch-btn-on": on,
    "switch-btn-off": !on,
  });

  return (
    <label className="switch">
      <input type="checkbox" className="switch-input" onClick={handleToggle} />
      <span className={classes} />
    </label>
  );
};
Switch.displayName = "Switch";

export default Switch;

export interface SwitchOnAndOffProps {
  children: ReactNode | null;
}

// export const On: React.FC<SwitchOnAndOffProps> = ({ children }) => {
//   const { on } = useContext(ToggleContext);
//   // this will cause error
//   // return on ? children : null;
//   return <div> {on ? children : null} </div>;
// };
export const On: React.FC<SwitchOnAndOffProps> = ({ children }) => {
  const { on } = useContext(ToggleContext);
  // this will cause error
  // return on ? children : null;
  return <div> {on ? children : null} </div>;
};
