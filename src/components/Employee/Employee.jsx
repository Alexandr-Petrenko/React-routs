import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Employee.scss';

export const Employee = ({ src, name, position, className }) => (
  <div className={classNames('employee', className)}>
    <img src={ src } alt={ name } className='employee__photo'/>
    <div className='employee__text'>
      <div className='employee__name'>
        { name }
      </div>
      <div className="employee__position">
        { position }
      </div>
    </div>
  </div>
);

Employee.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  classNames: PropTypes.string,
};

Employee.defaultProps = {
  classNames: '',
};
