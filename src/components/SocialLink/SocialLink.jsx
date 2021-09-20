import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './SocialLink.scss';

export const SocialLink = ({ src, content, className, href }) => (
  <div className={ classNames('social-link', className) }>
    <img
      src={ src }
      alt={ content }
      className='social-link__img'
    />
    <a href={ href } className='social-link__anchor'>
      { content }
    </a>
  </div>
);

SocialLink.propTypes = {
  src: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  href: PropTypes.string.isRequired,
};

SocialLink.defaultProps = {
  classNames: '',
};
