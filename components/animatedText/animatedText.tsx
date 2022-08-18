import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedCharacters from "./animatedCharacters";

interface Props {
  color: string;
  text: Text[];
}

interface Text {
  type: string;
  text: string;
}

const AnimatedText = ({ text, color }: Props): JSX.Element | null => {
  const [play, setPlay] = useState(false);

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  useEffect(() => {
    handleReplay();
  }, []);

  // Quick and dirt for the example
  const handleReplay = () => {
    setPlay(false);
    setTimeout(() => {
      setPlay(true);
    }, 100);
  };

  return (
    <motion.div
      className="App"
      initial="hidden"
      // animate="visible"
      animate={play ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {text.map((item, index) => {
          return <AnimatedCharacters color={color} {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default AnimatedText;
