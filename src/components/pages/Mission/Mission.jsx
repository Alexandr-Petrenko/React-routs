import './_Mission.scss';
import { SectionPicture } from '../../shared/SectionPicture';
import { Title } from '../../shared/Title';
import { SubText } from '../../shared/SubText';

const titleContent = 'Our Mission';
const TEXT_DATA = [
  {
    subtitle: 'Become the #1 Platform',
    paragraph: 'There is an opportunity to become the go-to platform for product managers.',
    titleClass: 'mission__sub-title',
    paragraphClass: 'mission__sub-paragraph',
    id: 0,
  },
  {
    subtitle: 'Create a Great Community',
    paragraph: `We want to help others by creating a community 
                where people can get answers to questions.`,
    titleClass: 'mission__sub-title',
    paragraphClass: 'mission__sub-paragraph',
    id: 1,
  },
  {
    subtitle: 'Lead by Example',
    paragraph: 'Our goal is to become the industry leader by fostering great relationships.',
    titleClass: 'mission__sub-title',
    paragraphClass: 'mission__sub-paragraph',
    id: 2,
  },
];

const Mission = () => (
  <section className="mission section-with-picture">
    <SectionPicture className="mission__section-picture" />
    <div className="mission__main logo">
      <Title content={titleContent} className="mission__title" />
      {TEXT_DATA.map((data) => {
        const { subtitle, paragraph, titleClass, paragraphClass, id } = data;

        return (
          <SubText
            text={paragraph}
            title={subtitle}
            titleClass={titleClass}
            paragraphClass={paragraphClass}
            className="mission__sub-text"
            key={id}
          />
        );
      })}
    </div>
  </section>
);

export { Mission };
