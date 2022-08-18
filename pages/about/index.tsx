import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AnimationWrapper from "../../components/animationWrapper/animationWrapper";
import About from "../../components/home/about/about";
import Skills from "../../components/home/skills/skills";
import { useScrollToTopOnLoad } from "../../utils/useScrollToTopOnLoad";

const AboutPage: NextPage = () => {
  useScrollToTopOnLoad();

  return (
    <>
      <AnimationWrapper>
        <Head>
          <title>About | Anthony Fernandez Developer Portfolio</title>
          <meta
            lang="en"
            name="description"
            content="Information about the developer experience and education of developer Anthony Fernandez."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <About />
        <Skills />
      </AnimationWrapper>
    </>
  );
};

export default AboutPage;
