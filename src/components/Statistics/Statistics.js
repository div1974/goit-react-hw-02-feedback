import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";


function Statistics(props) {
  return (
    <>
      <ul className={styles.stats}>
        <li>Good: {props.good}</li>
        <li>Neutral: {props.neutral}</li>
        <li>Bad: {props.bad}</li>
        <li>Total: {props.total}</li>
        <li>Positive feedback: {props.positivePercentage}%</li>
      </ul>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
