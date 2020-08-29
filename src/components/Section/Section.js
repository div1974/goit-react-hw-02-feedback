import React from "react";
import PropTypes from "prop-types";

const Section = (props) => (
  <>
    <h2>{props.title}</h2>
    {props.children}
  </>
);

Section.defaultProps = {
  title: "",
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
