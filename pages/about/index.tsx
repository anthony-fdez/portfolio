import { NextPage } from "next";
import React from "react";
import AnimationWrapper from "../../components/animationWrapper/animationWrapper";
import About from "../../components/home/about/about";

const AboutPage: NextPage = () => {
  return (
    <>
      <AnimationWrapper>
        <About />
      </AnimationWrapper>
    </>
  );
};

export default AboutPage;
