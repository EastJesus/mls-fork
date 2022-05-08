import * as React from 'react';
import Slider from 'react-slick';
import StarsRating from '../StarsRating/StarsRating';
import { sliderOptions, data } from './Slider';

import './SectionReviews.scss';

const SectionReviews = () => {
  React.useEffect(() => {
    const width = window.innerWidth;
    if (width > 770) {
      const slider = document.querySelector('.slick-track');
      const sliderHeight = slider.clientHeight;
      console.log(sliderHeight)
      const sliderInners = slider.querySelectorAll('.slick-slide');
      sliderInners.forEach((slide) => {
        slide.style.height = sliderHeight + "px";
      })
    }
  }, [])

  return (
    <div className="section-reviews text-center">
      <h2 className="section-reviews__title">{ data.title }</h2>
      <Slider { ...sliderOptions }>
        {data.reviews.map((review, index) => (
          <div
            className="review"
            key={ review.name }
          >
            <a href={review.link} className="review__inner" target="_blank" rel="noreferrer">
              
              <img className="review__avatar" src={review.avatar} />
              <div className="review__rating d-inline-flex">
                <StarsRating oldStyle={true} rating={review.rating} />
              </div>
              
              <div className="review__name">{ review.name }</div>
              <div className="review__text">{ review.text }</div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SectionReviews;
