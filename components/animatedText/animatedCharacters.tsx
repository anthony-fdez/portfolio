import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./wrapper";
import Tag from "./tag";

interface Props {
  text: string;
  type: string;
  color: string;
}

const AnimatedCharacters = ({ text, type, color }: Props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: color,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: color,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  //  Split each word of props.text into an array
  const splitWords = text.split(" ");

  // Create storage array
  const words: any = [];

  // Push each word into words array
  splitWords.map((word) => {
    words.push(word.split(""));
  });

  // Add a space ("\u00A0") to the end of each word
  words.map((word: string[]) => {
    return word.push("\u00A0");
  });

  return (
    <Tag type={type}>
      {words.map((word: any, index: number) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {word.flat().map((element: string, index: number) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
    </Tag>
  );
};

export default AnimatedCharacters;
