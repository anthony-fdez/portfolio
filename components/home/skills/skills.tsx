import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./skills.module.css";

const Skills = () => {
  const skills = [
    "React JS",
    "NextJs",
    "React Native",
    "NodeJS",
    "JavaScript",
    "REST APIs",
    "CI/CD",
    "JSON",
    "Redux",
    "Zustand",
    "React Hook Form",
    "Git/Github",
    "Linux",
    "Express JS",
    "UI Design",
    "Component Libraries",
    "Fluent in Spanish",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Supabase",
    "GraphQL",
    "TypeScript",
    "Zod",
    "Material UI",
    "Radix Primitives",
    "SASS",
    "HTML5/CSS",
    "Emotion JS",
    "Styled Components",
    "Storybook",
    "Docker",
    "AWS",
    "Vercel",
    "Travis CI",
    "PHP",
    "Web sockets",
    "APIs",
    "Jest",
    "React Testing Library",
    "Content Management Systems (CMS)",
  ];

  return (
    <div className={styles.content}>
      <Fade>
        <h1>Skills.</h1>
        <br></br>
        <div className={styles.columns}>
          <ul>
            {skills.map((skill) => (
              <li key={`skill-${skill}`}>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
