import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './_SocialLink.scss';

const SocialLink = ({ src, content, className, href }) => (
  <div className={ classNames('social-link', className) }>
    <img
      src={process.env.PUBLIC_URL + src}
      alt={ content }
      className='social-link__img'
    />
    <a
      href={ href }
      className='social-link__anchor'
      target='_blank'
      rel='noopener noreferrer'
    >
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

export { SocialLink };
