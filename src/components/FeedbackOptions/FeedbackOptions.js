import React from "react";
import PropTypes from "prop-types";
import styles from './FeedbackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 

  return (
    <div className={styles.btnSection}>
      {options.map((type) => (
        <button className={styles.btn} key={type} type="button" onClick={() => onLeaveFeedback(type)}>
          {type}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
