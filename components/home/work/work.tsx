import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./work.module.css";
import NoScrollLink from "../../noScrollLink/noScrollLink";
import MyButton from "../../ui/Button/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Work = (): JSX.Element => {
  return (
    <div id="work" className={styles.container}>
      <Fade>
        <h2 className={styles.header}>My Work.</h2>
      </Fade>
      <div>
        <section className={styles.projects_section}>
          <Fade>
            <div className={styles.project_container}>
              <LazyLoadImage
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="basketball-center/home.png "
              />

              <div className={styles.project_image_container}>
                <LazyLoadImage
                  effect="blur"
                  className={styles.project_image}
                  alt="Basketball Center Logo"
                  src="logos/BBALL_CENTER.png"
                />
              </div>
              <div className={styles.project_info_container}>
                <h2>Basketball Center</h2>
                <p>
                  Basketball Center is a mobile app built to help basketball
                  fans to stay up to date with everything in the league.
                  Features an in-game chat, personalized notifications for
                  favorite teams and players, real time shot-chart that can be
                  targeted to specific players with play-by-play info alongside
                  it.
                </p>
                <button className={styles.learn_more_button}>Learn More</button>
              </div>
            </div>
          </Fade>
          <br></br>
          <Fade>
            <div className={styles.project_container}>
              <LazyLoadImage
                className={styles.bg_image}
                alt="WeEatCode Logo"
                src="weeatcode/1.png "
              />

              <div className={styles.project_image_container}>
                <LazyLoadImage
                  effect="blur"
                  className={styles.project_image}
                  alt="WeEatCode Logo"
                  src="logos/weeatcode.png"
                />
              </div>
              <div className={styles.project_info_container}>
                <h2>WeEatCode</h2>
                <p>
                  WeEatCode is a fullstack blog web application. Users can
                  create an account, create a blog post, start a conversation
                  under any post and downvote and upvote any post or comment.
                  Among many other features.
                </p>
                <button className={styles.learn_more_button}>Learn More</button>
              </div>
            </div>
          </Fade>
          <br></br>
          <Fade>
            <div className={styles.project_container}>
              <LazyLoadImage
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="protypist/home.png"
              />
              <div className={styles.project_image_container}>
                <LazyLoadImage
                  effect="blur"
                  className={styles.project_image}
                  alt="Basketball Center Logo"
                  src="logos/protypist.png"
                />
              </div>
              <div className={styles.project_info_container}>
                <h2>ProTypist</h2>
                <p>
                  ProTypist is a fully featured typing game, with a multiplayer
                  mode and lots of other features
                </p>
                <button className={styles.learn_more_button}>Learn More</button>
              </div>
            </div>
          </Fade>
          <br></br>
          <Fade>
            <div className={styles.project_container}>
              <LazyLoadImage
                className={styles.bg_image}
                alt="Algo Saurus Logo"
                src="algo-saurus/1.webp"
              />
              <div className={styles.project_image_container}>
                <LazyLoadImage
                  effect="blur"
                  className={styles.project_image}
                  alt="Basketball Center Logo"
                  src="logos/dino.gif"
                />
              </div>
              <div className={styles.project_info_container}>
                <h2>AlgoSaurus</h2>
                <p>
                  AlgoSaurus is a complex algorithms visualization tool to help
                  people learn the basics about the most famous sorting
                  algorithms. This project placed top 3 at ShellHacks, one of
                  the largest hackathons at Florida.
                </p>
                <button className={styles.learn_more_button}>Learn More</button>
              </div>
            </div>
          </Fade>
        </section>

        <br></br>
        <Fade>
          <h2 className={styles.header}>Freelance Projects.</h2>
        </Fade>
        <section className={styles.projects_section}>
          <Fade>
            <div className={styles.project_container}>
              <LazyLoadImage
                className={styles.bg_image}
                alt="Basketball Center Logo"
                src="dls/home.png"
              />

              <div className={styles.project_image_container}>
                <LazyLoadImage
                  effect="blur"
                  className={styles.project_image}
                  alt="Basketball Center Logo"
                  src="logos/dls.png"
                />
              </div>
              <div className={styles.project_info_container}>
                <h2>DLS Fixit</h2>
                <p>
                  DLSFixit is a doors and locks repair and installation company
                  located in the south Florida area.
                </p>
                <button className={styles.learn_more_button}>Learn More</button>
              </div>
            </div>
          </Fade>
        </section>
      </div>
    </div>
  );
};

export default Work;
