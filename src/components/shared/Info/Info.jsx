import PropTypes from 'prop-types';
import classNames from 'classnames';
import SubText from '../SubText.jsx';
import Title from '../Title';
import styles from './_Info.module.scss';

const { info } = styles;

const Info = ({
  content,
  className,
  tittleContent,
  containerClass,
  titleClass,
  subParagraphClass,
  isDefault,
  isCentered,
  isRelative,
}) => (
  <>
    <Title content={tittleContent} className={titleClass} />
    <div className={classNames('column-double', className, info)}>
      {content.map((item) => {
        const { id, title, paragraph } = item;

        return (
          <SubText
            text={paragraph}
            title={title}
            paragraphClass={subParagraphClass}
            className={containerClass}
            isDefault={isDefault}
            isCentered={isCentered}
            isRelative={isRelative}
            key={id}
          />
        );
      })}
    </div>
  </>
);

Info.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  tittleContent: PropTypes.string.isRequired,
  titleClass: PropTypes.string,
  containerClass: PropTypes.string,
  subTitleClass: PropTypes.string,
  subParagraphClass: PropTypes.string,
  isDefault: PropTypes.bool,
  isCentered: PropTypes.bool,
  isRelative: PropTypes.bool,
};

Info.defaultProps = {
  className: '',
  titleClass: '',
  containerClass: '',
  subTitleClass: '',
  subParagraphClass: '',
  isDefault: false,
  isCentered: false,
  isRelative: false,
};

export default Info;
