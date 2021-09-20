import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './SubTitle.scss';

export const SubTitle = ({ content, className }) => (
  <h3 className={ classNames('sub-title', className) }>
    { content }
  </h3>
);

SubTitle.propTypes = {
  content: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

SubTitle.defaultProps = {
  classNames: '',
};
