import React from "react";
import Header from "../ui/header/header";

const StaticPageLayout = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Header simple title={title} />
      {children}
    </>
  );
};

export default StaticPageLayout;
