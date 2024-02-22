import React from "react";
import Header from "../ui/header/header";
import { AnimatePresence } from "framer-motion";
import ProjectsDialog from "../ui/ProjectsDialog/ProjectsDialog";
import AnimationWrapper from "../ui/animationWrapper/animationWrapper";
import Contact from "../ui/footer/footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <ProjectsDialog />
        <AnimationWrapper>{children}</AnimationWrapper>
      </AnimatePresence>
      <Contact />
    </>
  );
};

export default MainLayout;
