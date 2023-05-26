import React from "react";

interface Props {
  children: JSX.Element;
  type: string;
}

const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
};

const Tag = ({ children, type }: Props) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const TagElement = tagMap[type];

  return <TagElement>{children}</TagElement>;
};

export default Tag;
