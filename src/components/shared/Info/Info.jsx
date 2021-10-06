import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_Info.scss';
import { SubText } from '../SubText';
import { Title } from '../Title';

const Info = ({
  content,
  className,
  tittleContent,
  containerClass,
  titleClass,
  subTitleClass,
  subParagraphClass,
}) => (
  <>
    <Title content={tittleContent} className={titleClass} />
    <div className={classNames('info column-double', className)}>
      {content.map((item) => {
        const { id, title, paragraph } = item;

        return (
          <SubText
            text={paragraph}
            title={title}
            titleClass={subTitleClass}
            paragraphClass={subParagraphClass}
            className={containerClass}
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
};

Info.defaultProps = {
  className: '',
  titleClass: '',
  containerClass: '',
  subTitleClass: '',
  subParagraphClass: '',
};

export { Info };
