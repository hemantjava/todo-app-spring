import React, { useState, useEffect } from "react";

const WarningBar = ({ message, duration }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timer);
      setShow(false);
    };
  }, [duration]);

  return show ? <div className="warning-bar">{message}</div> : null;
};

export default WarningBar;
