/* eslint-disable react/prop-types */
import React, { useState, useContext, FunctionComponentElement } from "react";
import classNames from "classnames";
import { MenuContext } from "./Menu";
import { MenuItemProps } from "./MenuItem";
export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  title,
  className,
  children,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const context = useContext(MenuContext);
  const classes = classNames("menu-item submenu-item", classNames, {
    "is-active": context.index === index,
  });

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  let timer: any;
  function handleMouse(e: React.MouseEvent, toggle: boolean) {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toggle);
    }, 300);
  }

  const clickEvents = context.mode === "vertical" && {
    onclick: handleClick,
  };

  const hoverEvents = context.mode !== "vertical" && {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouse(e, true);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouse(e, false);
    },
  };
  const renderChildren = () => {
    const subMenuClasses = classNames("viking-submenu", {
      "menu-opened": menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childrenElement = child as FunctionComponentElement<MenuItemProps>;
      if (childrenElement.type.displayName === "MenuItem") {
        return childrenElement;
      } else {
        console.error("Warning: Menu has child that is not MenuItem");
      }
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" onClick={handleClick} {...clickEvents}>
        {title}
      </div>
      {renderChildren()}
    </li>
  );
};
SubMenu.displayName = "SubMenu";

export default SubMenu;
