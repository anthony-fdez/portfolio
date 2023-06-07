import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import projects from "../../../constants/projects";
import MasonryGridItem from "./MasonryGridItem/MasonryGridItem";
import styles from "./work2.module.css";

const Work2 = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>My Work.</h2>

      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}>
        <Masonry>
          {Object.keys(projects).map((project) => (
            <MasonryGridItem
              key={projects[project].name}
              project={projects[project]}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Work2;
