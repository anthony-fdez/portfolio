import React from "react";
import styles from "../project.module.css";

import ImagesCarousel from "../../../../ui/imagesCarousel/ImagesCarousel";

const WeEatCode = (): JSX.Element => {
  const images: string[] = [
    "/weeatcode/1.png",
    "/weeatcode/2.png",
    "/weeatcode/3.png",
    "/weeatcode/4.png",
  ];

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.header}>WeEatCode</h1>
        <span className={styles.live_preview_link}>
          Live Website:{" "}
          <a
            className="link"
            target="_blank"
            href="https://weeatcode.com/"
            rel="noreferrer"
          >
            https://weeatcode.com/
          </a>
        </span>
        <div className={styles.images_container}>
          <ImagesCarousel images={images} altText="DLSFixit Screenshot" />
        </div>
        <div className={styles.paragraph}>
          <p>
            WeEatCode is a fullstack blog web application. Users can create an
            account, create a blog post, start a conversation under any post and
            downvote and upvote any post or comment.
          </p>
        </div>

        <h2 className={styles.secondary_header}>Technical details:</h2>
        <ul>
          <li>
            Implemented key infrastructure on the backend and created routes and
            models to handle user authentication, CRUD actions to the databases
            such as following users, and upvoting posts.
          </li>
          <li>
            Front End was created with NextJS, so each post created by the users
            is indexed by google, improving SEO significantly. Implemented a
            what-you-see-is-what-you-get text editor for creating posts.
          </li>
          <li>
            Created a fully functional comment section with nested comments,
            similar to reddit.com.
          </li>
        </ul>
        <h2 className={styles.secondary_header}>Technologies used:</h2>
        <h3 className={styles.tertiary_header}>
          <a
            className="link"
            href="https://github.com/anthony-fdez/weeatcode-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Frontend:
          </a>
        </h3>
        <ul>
          <li>React</li>
          <li>Typescript</li>
          <li>NextJS</li>
          <li>Redux</li>
          <li>TipTap Text Editor</li>
        </ul>
        <h3 className={styles.tertiary_header}>
          <a
            className="link"
            href="https://github.com/anthony-fdez/weeatcode-backend"
            target="_blank"
            rel="noreferrer"
          >
            Backend:
          </a>
        </h3>
        <ul>
          <li>NodeJS</li>
          <li>PostgreSQL</li>
          <li>Jest</li>
        </ul>
      </main>
    </div>
  );
};

export default WeEatCode;
