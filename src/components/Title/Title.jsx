import React from "react";
import PropTypes from "prop-types";
import './Title.scss';

export const Title = ({ content, className }) => {
  return <h2 className={`title ${ className }`}>{ content }</h2>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: '',
};
