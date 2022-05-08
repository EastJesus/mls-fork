import * as React from 'react';
import AmazonLinks from '../AmazonLinks/AmazonLinks';
import { ReactComponent as ImgBookShape } from '../../images/book-shape.svg';
import ImgBookMain from '../../images/book-main.png';
import ImgBookMain2x from '../../images/book-main@2x.png';

import './SectionIntro.scss';

const data = {
  title: 'Machine Learning Simplified',
  subtitle: 'A Gentle Introduction to Supervised Learning',
  availableOn: 'Available on',
  bookVariants: [
    {
      price: '$15.00',
      type: 'Paperback',
      url: 'http://www.google.com',
    },
    {
      price: '$20.00',
      type: 'Hardcover',
      url: 'http://www.google.com',
    },
    {
      price: '$7.00',
      type: 'E-book',
      url: 'http://www.google.com',
    },
  ],
};

const SectionIntro = () => {
  return (
    <div className="section-intro">
      <div className="section-intro__content text-center d-flex flex-column align-items-center">
        <h1>{ data.title }</h1>

        <div className="section-intro__subtitle">{ data.subtitle }</div>

        <div className="section-intro__book-wrapper">
          <div className="section-intro__book-shape">
            <ImgBookShape title="Book shape" />
          </div>
          <div className="section-intro__book">
            <img
              src={ImgBookMain}
              srcSet={`${ImgBookMain2x} 2x`}
              alt="Machine Learning Simplified"
            />
          </div>
        </div>

        {/* <AmazonLinks /> */}
      </div>
    </div>
  )
}

export default SectionIntro;
