import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface Props {
  isOpen: boolean;
  children: JSX.Element;
}

const Drawer = ({ isOpen, children }) => {
  return <div>{children}</div>;
};

export default Drawer;
