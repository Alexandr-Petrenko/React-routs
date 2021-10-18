import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_Employee.scss';

const Employee = ({ src, name, position, className }) => (
  <div className={classNames('employee', className)}>
    <img
      src={process.env.PUBLIC_URL + src}
      alt={name}
      className="employee__photo"
    />
    <div className="employee__text">
      <div className="employee__name">{name}</div>
      <div className="employee__position">{position}</div>
    </div>
  </div>
);

Employee.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Employee.defaultProps = {
  className: '',
};

export default Employee;
