import * as React from 'react';
import TryItBtn from '../TryItBtn/TryItBtn';

import './SectionReadFirst.scss';

const data = {
  title: 'Read first, buy later!',
};

const SectionReadFirst = () => {
  return (
    <div className="section-read-first">
      <div className="section-read-first__content text-center">
        <h2 className="section-read-first__title">{ data.title }</h2>
        <TryItBtn></TryItBtn>
      </div>
    </div>
  )
}

export default SectionReadFirst;
