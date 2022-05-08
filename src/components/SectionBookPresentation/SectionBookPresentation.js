import * as React from 'react';
import StarsRating from '../StarsRating/StarsRating';
import ImgBookBig from '../../images/book-big.png';
import ImgBookBig2x from '../../images/book-big@2x.png';
import { ratings } from '../../config';

import './SectionBookPresentation.scss';

const data = {
  author: 'Andrew Wolf',
  title: [
    'Machine Learning Simplified:',
    'A gentle introduction to supervised learning',
  ],
  bookDescription: [
    'The underlying goal of "Machine Learning Simplified" is to develop strong intuition for ML inside you. We would use simple intuitive examples to explain complex concepts, algorithms or methods, as well as democratize all mathematics behind machine learning.',
    'After reading this book, you would understand everything that comes into the scope of Supervised ML, and would be able to not only understand nitty-gritty details of mathematics behind the scene, but also explain to anyone how things work on a high level.'
  ],
  share: 'Share this story',
}

const SectionBookPresentation = () => {
  return (
    <div className="section-book-presentation">
      <div className="section-book-presentation__book">
        <img src={ImgBookBig} srcSet={`${ImgBookBig2x} 2x`} alt="Machine Learning Simplified" />
      </div>

      <div className="section-book-presentation__author">
        { data.author }
      </div>

      <div className="section-book-presentation__title">
        {data.title.map((txt, i) => (
          <React.Fragment>
            { txt }
            { (i !== data.title.length - 1) && <br /> }
          </React.Fragment>
        ))}
      </div>

      <div className="section-book-presentation__rating">
        {ratings.length > 0 && ratings.map(({ rating, reviewsAmount, source }) => (
          <StarsRating source={source} rating={rating} reviewsAmount={reviewsAmount} />
        ))}
      </div>

      <div className="section-book-presentation__description">
        {data.bookDescription.map(txt => (
          <p>{ txt }</p>
        ))}
      </div>

      {/* <div className="section-book-presentation__amazon">
        <AmazonLinks />
      </div> */}

      <div className="section-book-presentation__share">
        <span className="section-book-presentation__share-text">{ data.share }</span>
        <div className="share-icons">
          <div className="share-icons__item share-icons__item--linkedin" />
          <div className="share-icons__item share-icons__item--twitter" />
          <div className="share-icons__item share-icons__item--facebook" />
        </div>
      </div>
    </div>
  )
}

export default SectionBookPresentation;