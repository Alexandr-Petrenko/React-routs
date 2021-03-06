import classNames from 'classnames';
import Title from '../../shared/Title';
import Employee from '../../shared/Employee';
import SubParagraph from '../../shared/SubParagraph';
import styles from './_Team.module.scss';

const title = 'Meet the Team';
const paragraph = `A description about your team goes here. 
                     Talk about your values, mission, and anything else you 
                     think would be helpful or relevant for investors to know. 
                     A description about your team goes here. `;
const WORKERS_LIST = [
  { id: 0, name: 'Charlie Kelly', position: 'CEO', url: '/icons/charlie.png' },
  { id: 1, name: 'Sandra Alta', position: 'CMO', url: '/icons/sandra.png' },
  { id: 2, name: 'Sandra Alta', position: 'CMO', url: '/icons/alta.png' },
  { id: 3, name: 'Joe Black', position: 'CMO', url: '/icons/joe.png' },
];

const { team, teamText, teamEmployee, teamSubTitle } = styles;

const Team = () => (
  <section className={classNames('logo', team)}>
    <div className={teamText}>
      <Title content={title} className={teamSubTitle} />
      <SubParagraph content={paragraph} />
    </div>
    <div className={classNames('column-double', teamEmployee)}>
      {WORKERS_LIST.map((worker) => {
        const { id, name, position, url } = worker;

        return (
          <Employee
            src={url}
            position={position}
            name={name}
            key={id}
            className={teamEmployee}
          />
        );
      })}
    </div>
  </section>
);

export default Team;
