import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
}

const MyButton = ({ children }: Props) => {
  return (
    <motion.div style={{ width: "fit-content" }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  );
};

export default MyButton;
