import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./animatedText.module.css";
import AnimatedCharacters from "./animatedCharacters";

interface Props {
  text: [
    {
      type: string;
      text: string;
    }
  ];
}

const AnimatedText = (): JSX.Element | null => {
  const [play, setPlay] = useState(false);
  // Placeholder text data, as if from API
  const placeholderText = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text!",
    },
  ];

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
        {placeholderText.map((item, index) => {
          return <AnimatedCharacters {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
};

export default AnimatedText;
