import React from 'react';
import classNames from 'classnames'
import './SectionPicture.scss'
import PropTypes from 'prop-types';

export const SectionPicture = ({ className }) => (
  <div className={ classNames('section-picture', className) } />
)

SectionPicture.propTypes = {
  className: PropTypes.string,
};

SectionPicture.defaultProps = {
  classNames: '',
};
