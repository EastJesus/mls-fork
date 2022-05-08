import * as React from 'react';
import ReactStars from "react-rating-stars-component";

import ImgStar from '../../images/star.png';
import { prepareReviewsAmount } from '../../helpers';

import './StarsRating.scss';

const StarsRating = (props) => {
  const { rating, reviewsAmount, withRating, oldStyle, source, size = 20 } = { ...props }

  return (
    <div className="stars-rating d-inline-flex align-items-center">
      {!!oldStyle && [...Array(rating)].map((item, index) =>
        <div className="stars-rating__star" key={`star-` + index}>
          <img src={ImgStar} alt="Rating star" />
        </div>
      )}

      {!oldStyle && (
        <ReactStars
          count={5}
          size={size}
          value={rating}
          isHalf={true}
          edit={false}
          activeColor="#FFB520"
        />
      )}

      {withRating && (
        <span className="stars-rating__value">{rating}</span>
      )}

      { !!reviewsAmount && (
        <div className="stars-rating__reviews-amount">
          { `(${prepareReviewsAmount(reviewsAmount)})` }
        </div>
      )}

      {source && (
        <a target="_blank" rel="noreferrer" href={source.link}>
          <img className="stars-rating__logo" src={source.logo} alt="Seller logo" />
        </a>
      )}
    </div>
  )
}

export default StarsRating;
