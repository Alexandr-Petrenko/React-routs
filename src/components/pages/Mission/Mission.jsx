import classNames from 'classnames';
import SectionPicture from '../../shared/SectionPicture';
import Title from '../../shared/Title';
import SubText from '../../shared/SubText.jsx';
import styles from './_Mission.module.scss';

const titleContent = 'Our Mission';
const TEXT_DATA = [
  {
    subtitle: 'Become the #1 Platform',
    paragraph:
      'There is an opportunity to become the go-to platform for product managers.',
    paragraphClass: 'mission__sub-paragraph',
    id: 0,
  },
  {
    subtitle: 'Create a Great Community',
    paragraph: `We want to help others by creating a community 
                where people can get answers to questions.`,
    paragraphClass: 'mission__sub-paragraph',
    id: 1,
  },
  {
    subtitle: 'Lead by Example',
    paragraph:
      'Our goal is to become the industry leader by fostering great relationships.',
    paragraphClass: 'mission__sub-paragraph',
    id: 2,
  },
];

const {
  mission,
  missionSectionPicture,
  missionMain,
  missionSubTex,
  missionTitle,
} = styles;

const Mission = () => (
  <section className={classNames('section-with-picture', mission)}>
    <SectionPicture className={missionSectionPicture} />
    <div className={classNames('logo', missionMain)}>
      <Title content={titleContent} className={missionTitle} />
      {TEXT_DATA.map((data) => {
        const { subtitle, paragraph, paragraphClass, id } = data;

        return (
          <SubText
            text={paragraph}
            title={subtitle}
            paragraphClass={paragraphClass}
            className={missionSubTex}
            isDefault={true}
            key={id}
          />
        );
      })}
    </div>
  </section>
);

export default Mission;
