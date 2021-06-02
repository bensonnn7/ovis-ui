/* eslint-disable react/prop-types */
import React, { FC, useState } from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

interface AlertProps {
  title: string;
  description?: string;
  type?: AlertType;
  onClose?: () => void;
  closable?: boolean;
}

const Alert: FC<AlertProps> = (props) => {
  const { title, description, type, onClose, closable } = props;
  const [visible, setVisible] = useState(true);
  const classes = classNames("alert", {
    [`alert-${type}`]: type,
  });

  function onCloseClicked() {
    onClose && onClose();
    setVisible(false);
  }
  if (!visible) return null;

  return (
    <div className={classes}>
      <div className="alert__header">
        <span className="alert__title">{title}</span>
        {closable && <span onClick={onCloseClicked}>close</span>}
      </div>
      {description && <span className="alert__description">{description}</span>}
    </div>
  );
};

Alert.defaultProps = {
  title: "this is alert",
  type: "default",
  closable: true,
};
export default Alert;
