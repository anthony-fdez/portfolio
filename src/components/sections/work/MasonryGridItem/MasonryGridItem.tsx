import React from "react";
import styles from "../work.module.css";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import Button from "../../../ui/Button/Button";
import { IProject } from "../../../../constants/projects";
import useGlobalStore from "../../../../utils/store/useGlobalStore";

interface Props {
  project: IProject;
}

const MasonryGridItem = ({ project }: Props): JSX.Element => {
  const { setProjects } = useGlobalStore();

  const handleOpenProjectModal = (component: JSX.Element) => {
    setProjects({
      isModalOpen: true,
      selectedProjectComponent: component,
    });
  };

  return (
    <Fade delay={300} key={project.name}>
      <div className={styles.item}>
        <div className={styles.item_header}>
          <Image
            height={80}
            width={80}
            className={styles.item_header_image}
            alt="Basketball Center Logo"
            src={project.iconImage}
          />
          <h3 className={styles.item_header_text}>{project.name}</h3>
        </div>
        <p className={styles.description_text}>{project.description}</p>
        <div className={styles.footer}>
          <Button
            onClick={() => {
              handleOpenProjectModal(project.component);
            }}
            iconRight={<ArrowRight className={styles.icon_right} size={18} />}
          >
            Learn More
          </Button>
        </div>
      </div>
    </Fade>
  );
};

export default MasonryGridItem;
