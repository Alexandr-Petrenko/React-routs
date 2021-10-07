import PropTypes from "prop-types";
import classNames from "classnames";
import "./_Title.scss";

const Title = ({ content, a }) => (
  <h2 className={classNames("title", a)}>{content}</h2>
);

Title.propTypes = {
  content: PropTypes.string.isRequired,
  a: PropTypes.string,
};

Title.defaultProps = {
  a: "",
};

export default Title;
