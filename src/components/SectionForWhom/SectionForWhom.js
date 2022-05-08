import * as React from 'react';

import './SectionForWhom.scss';

const data = {
  title: 'For whom the book is',
  clientTypes: [
    {
      title: 'Developers',
      description: 'Any front/backend developer or devops/software engineer who wants to become an ML engineer.',
    },
    {
      title: 'Students',
      description: 'Students who take or plan to take ML classes, as well as any student who wants to transition to IT career.',
    },
    {
      title: 'Lecturers',
      description: 'Lecturers or anyone else teaching the subject who want to explore how complex frameworks can be gently explained.',
    },
    {
      title: 'Everyone',
      description: 'Literally anyone else who wants to feel confident while talking about ML in front of technical or business people.',
    },
  ]
};

const SectionForWhom = () => {
  return (
    <div className="section-for-whom">
      <h2 className="section-for-whom__title text-center">{ data.title }</h2>

      <ul className="section-for-whom__list d-flex flex-column flex-md-row align-items-between">
        {data.clientTypes.map((clientType, index) => (
          <li
            className={ `for-whom section-for-whom__list-item section-for-whom__list-item-${index + 1}` }
            key={clientType.title}
          >
            <div className="for-whom__title">{clientType.title}</div>
            <div className="for-whom__description">{clientType.description}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SectionForWhom;
