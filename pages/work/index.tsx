import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import AnimationWrapper from "../../components/animationWrapper/animationWrapper";
import Work from "../../components/home/work/work";
import { useScrollToTopOnLoad } from "../../utils/useScrollToTopOnLoad";
import styles from "./work.module.css";

const WorkPage: NextPage = () => {
  useScrollToTopOnLoad();

  return (
    <>
      <AnimationWrapper>
        <Head>
          <title>Work | Anthony Fernandez Developer Portfolio</title>
          <meta
            lang="en"
            name="description"
            content="Personal projects completed and freelance jobs done by developer Anthony Fernandez"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.container}>
          <Work />
        </div>
      </AnimationWrapper>
    </>
  );
};

export default WorkPage;
