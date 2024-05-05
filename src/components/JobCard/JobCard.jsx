import React from "react";
import styles from "./JobCard.module.css";

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

  // Function to format salary range
  const formatSalary = () => {
    if (minJdSalary && maxJdSalary) {
      return `₹${minJdSalary} - ₹${maxJdSalary} LPA`;
    } else if (minJdSalary) {
      return `Above ₹${minJdSalary} LPA`;
    } else if (maxJdSalary) {
      return `Upto ₹${maxJdSalary} LPA`;
    } else {
      return "Salary not provided";
    }
  };

  // Function to format experience range
  const formatExperience = () => {
    if (minExp && maxExp) {
      return `${minExp} - ${maxExp} years`;
    } else if (minExp) {
      return `Minimum ${minExp} years`;
    } else if (maxExp) {
      return `Upto ${maxExp} years`;
    } else {
      return "Experience not provided";
    }
  };

  return (
    <>
      <div className={styles.cardMainWrapper}>
        <div className={styles.cardContentWrapper}>
          <div className={styles.postInfo}>
            <div className={styles.postDate}>
              <p>⏳ Posted 3 days ago</p>
            </div>
          </div>
          <div className={styles.cardContent}>
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
              Estimated Salary: {formatSalary()}
            </p>
            <div className={styles.aboutCompany}>
              <p>About Company: </p>
              <p>About us </p>
              <div>{jobDetailsFromCompany}</div>
            </div>
            <div className={styles.viewJob}>
              <span>View Job</span>
            </div>
            <div className={styles.minExperience}>
              <h3>Minimum Experience</h3>
              <h2>{formatExperience()}</h2>
            </div>
          </div>
          <div className={styles.statusContainer}>
            <div className={styles.statusButtonContainer}>
              <button className={styles.customBtn}>⚡ Easy Apply</button>
            </div>
            <div className={styles.statusButtonContainer}>
              <button className={styles.customBtn}>Unlock referral asks</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
