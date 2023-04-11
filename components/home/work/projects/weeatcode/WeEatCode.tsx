import React from "react";
import Head from "next/head";
import styles from "../project.module.css";

import ImagesCarousel from "../../../../imagesCarousel/imagesCarousel";

const WeEatCode = (): JSX.Element => {
  const images: string[] = [
    "/weeatcode/1.png",
    "/weeatcode/2.png",
    "/weeatcode/3.png",
    "/weeatcode/4.png",
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>WeEatCode | Anthony Fernandez Developer Portfolio</title>
        <meta
          lang="en"
          name="description"
          content="Description and information about the project WeEatCode, developed by Anthony Fernandez"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>WeEatCode</h1>
          <p>
            WeEatCode is a fullstack blog web application. Users can create an
            account, create a blog post, start a conversation under any post and
            downvote and upvote any post or comment.
          </p>
        </div>
        <p className={styles.live_preview_link}>
          Live Website:{" "}
          <a
            className="link"
            target="_blank"
            href="https://weeatcode.com/"
            rel="noreferrer"
          >
            https://weeatcode.com/
          </a>
        </p>
        <ImagesCarousel images={images} altText="DLSFixit Screenshot" />
        <div className={styles.project_info}>
          <h2>Technical details:</h2>
          <ul>
            <li>
              Implemented key infrastructure on the backend and created routes
              and models to handle user authentication, CRUD actions to the
              databases such as following users, and upvoting posts.
            </li>
            <li>
              Front End was created with NextJS, so each post created by the
              users is indexed by google, improving SEO significantly.
              Implemented a what-you-see-is-what-you-get text editor for
              creating posts.
            </li>
            <li>
              Created a fully functional comment section with nested comments,
              similar to reddit.com.
            </li>
          </ul>
          <h2>Technologies used:</h2>
          <a
            className="link"
            href="https://github.com/anthony-fdez/weeatcode-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Frontend:
          </a>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>NextJS</li>
            <li>Redux</li>
            <li>TipTap Text Editor</li>
          </ul>
          <br></br>
          <a
            className="link"
            href="https://github.com/anthony-fdez/weeatcode-backend"
            target="_blank"
            rel="noreferrer"
          >
            Backend
          </a>
          <ul>
            <li>NodeJS</li>
            <li>PostgreSQL</li>
            <li>Jest</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default WeEatCode;
