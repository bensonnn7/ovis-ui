/* eslint-disable react/prop-types */
import React, { useState, createContext } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./MenuItem";

type MenuMode = "vertical" | "horizontal";
type SelectCallBack = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  mode?: MenuMode;
  onSelect?: SelectCallBack;
  style?: React.CSSProperties;
  className?: string;
}

export interface IMenuContext {
  index: number;
  onSelect?: SelectCallBack;
  mode?: MenuMode;
}

export const MenuContext = createContext<IMenuContext>({ index: 0 });

const Menu: React.FC<MenuProps> = (props) => {
  const {
    defaultIndex = 0,
    mode,
    onSelect,
    style,
    className,
    children,
  } = props;
  // 控制组建的state
  const [currentActive, setCurrentActive] = useState(defaultIndex);

  const classes = classNames("ovis-menu", className, {
    "menu-vertical": mode === "vertical",
  });

  const handleClick = (index: number) => {
    setCurrentActive(index);
    // user defined callback
    onSelect && onSelect(index);
  };

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    mode: mode,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === "MenuItem" || displayName === "SubMenu") {
        return React.cloneElement(childElement, {
          index,
        });
      } else {
        console.error("Warning: Menu has child that is not MenuItem");
      }
    });
  };

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: "horizontal",
};

export default Menu;
