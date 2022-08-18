import { NextPage } from "next";
import React from "react";
import AnimationWrapper from "../../components/animationWrapper/animationWrapper";
import Work from "../../components/home/work/work";
import styles from "./work.module.css";

const WorkPage: NextPage = () => {
  return (
    <>
      <AnimationWrapper>
        <div className={styles.container}>
          <Work />
        </div>
      </AnimationWrapper>
    </>
  );
};

export default WorkPage;
