import styles from "./jumbo.module.css";

const Jumbo = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h3>Hi, I&apos;m Anthony!</h3>
      <h1>
        I&apos;m a fullstack developer. Focused on building better software
        every day.
      </h1>
      <p></p>
      <a
        target="_blank"
        href="mailto:anthonyfdez23@gmail.com"
        className="main-button"
        rel="noreferrer"
      >
        Contact Me
      </a>
    </div>
  );
};
export default Jumbo;
