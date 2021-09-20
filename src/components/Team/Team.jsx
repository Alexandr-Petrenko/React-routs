import React from 'react';
import './Team.scss';
import {Title} from "../Title";
import {Employee} from "../Employee";
import {SubParagraph} from "../SubParagraph";

export const Team = () => {
  const [title, setTitle] = React.useState('Meet the Team');
  const [paragraph, setParagraph] = React.useState(
    `A description about your team goes here. 
    Talk about your values, mission, and anything else you 
    think would be helpful or relevant for investors to know. 
    A description about your team goes here. `
  );
  const [workers, setWorkers] = React.useState(
    [
      {id: 0, name: 'Charlie Kelly', position: 'CEO', url: '/icons/charlie.png',},
      {id: 1, name: 'Sandra Alta', position: 'CMO', url: '/icons/sandra.png',},
      {id: 2, name: 'Sandra Alta', position: 'CMO', url: '/icons/alta.png',},
      {id: 3, name: 'Joe Black', position: 'CMO', url: '/icons/joe.png',}
    ]
  );

  return (
    <section className='team logo'>
      <div className='team__text'>
        <Title content={ title } className='team__title'/>
        <SubParagraph content={ paragraph }/>
      </div>
      <div className='team__employee'>
        { workers.map(worker => {
            const { id, name, position, url } = worker;

            return (
              <Employee
                src={ url}
                position={ position }
                name={ name }
                key={ id }
                className='team__employee'
              />
            );
          })
        }
      </div>
    </section>
  );
}
