import React from "react";

import styles from "./Hero.module.css";
import heroImage from '../../assets/hero/heroImage.png'

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Komal</h1>
        <p className={styles.description}>
          I'm a frontend developer with 5 years of experience using React and
          Javascript. Reach out if you'd like to learn more!
        </p>
        <a href="../assets/Resume/ResumeOfficial.pdf"
        download className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
