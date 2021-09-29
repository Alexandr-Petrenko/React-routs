import React from 'react';
import PropTypes from "prop-types";
import './_Paragraph.scss';

const Paragraph = ({ content, className }) => {
  return (
    <p className={`paragraph ${ className }`}>
      { content }
    </p>
  );
};

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Paragraph.defaultProps = {
  className: '',
};

export { Paragraph };
