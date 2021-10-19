import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './_SocialLink.module.scss';

const { socialLink, socialLinkImg, socialLinkAnchor } = styles;

const SocialLink = ({ src, content, className, href }) => (
  <div className={classNames(socialLink, className)}>
    <img
      src={process.env.PUBLIC_URL + src}
      alt={content}
      className={socialLinkImg}
    />
    <a
      href={href}
      className={socialLinkAnchor}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  </div>
);

SocialLink.propTypes = {
  src: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

SocialLink.defaultProps = {
  className: '',
};

export default SocialLink;
