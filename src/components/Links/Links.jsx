import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SocialLink} from '../SocialLink';
import './Links.scss';

export const Links = ({ className, content, classForChild }) => (
    <div className={ classNames('links', className) }>
      { content.map(item => {
        const { linkSrc, linkHref, linkContent, id } = item;

        return (
          <SocialLink
            src={ linkSrc }
            href={ linkHref }
            content={ linkContent }
            key={ id }
            className={ classForChild }
          />
        );

        })}
    </div>
  );

Links.propTypes = {
  className: PropTypes.string,
  classForChild: PropTypes.string,
  content: PropTypes.arrayOf(Object).isRequired,
};

Links.defaultProps = {
  className: '',
  classForChild: '',
};
