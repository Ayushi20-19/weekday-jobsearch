import React from "react";
import styles from "./JobCard.module.css";
import { formatExperience, formatSalary } from "../../utils/utils";

const JobCard = ({ data }) => {
  const {
    companyName,
    jobRole,
    location,
    maxJdSalary,
    minJdSalary,
    minExp,
    maxExp,
    logoUrl,
    jobDetailsFromCompany,
  } = data;

  return (
    <>
      <div className={styles.cardMainWrapper}>
        <article className={styles.cardContentWrapper}>
          <section className={styles.postInfo}>
            <div className={styles.postDate}>
              <p>⏳ Posted 3 days ago</p>
            </div>
          </section>
          <section className={styles.cardContent}>
            <div className={styles.companyInfo}>
              <img src={logoUrl} alt="logo" />
              <div>
                <div className={styles.infoContainer}>
                  <h3>{companyName}</h3>
                  <h2>{jobRole}</h2>
                </div>
                <p className={styles.cardsSubText}>{location}</p>
              </div>
            </div>
            <p className={styles.cardSalary}>
              Estimated Salary: {formatSalary(minJdSalary, maxJdSalary)}
            </p>
            <section className={styles.aboutCompany}>
              <p>About Company: </p>
              <p>About us </p>
              <div>{jobDetailsFromCompany}</div>
            </section>
            <div className={styles.viewJob}>
              <span>View Job</span>
            </div>
            <div className={styles.minExperience}>
              <h3>Minimum Experience</h3>
              <h2>{formatExperience(minExp, maxExp)}</h2>
            </div>
          </section>
          <section className={styles.statusContainer}>
            <div className={styles.statusButtonContainer}>
              <button className={styles.customBtn}>⚡ Easy Apply</button>
            </div>
            <div className={styles.statusButtonContainer}>
              <button className={styles.customBtn}>Unlock referral asks</button>
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default JobCard;
