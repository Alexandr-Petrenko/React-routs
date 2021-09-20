import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './SubParagraph.scss';

export const SubParagraph = ({ content, className }) => (
  <p className={ classNames('sub-paragraph', className) }>
    { content }
  </p>
);

SubParagraph.propTypes = {
  content: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

SubParagraph.defaultProps = {
  classNames: '',
};
