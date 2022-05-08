import React from 'react';
import classnames from 'classnames';
import Avatar1 from '../../images/avatar-review-4.svg';
import Avatar2 from '../../images/avatar-review-5.svg';
import Avatar3 from '../../images/avatar-review-6.svg';
import Avatar4 from '../../images/avatar-review-7.svg';
import Avatar5 from '../../images/avatar-review-6.svg';

import './Slider.scss';

export const data = {
  title: 'Reviews',
  reviews: [
      {
      avatar: Avatar1,
      rating: 5,
      text: 'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco',
      name: 'Katherine S.',
      link: "http://google.com"
      },
      {
      avatar: Avatar2,
      rating: 5,
      text: 'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamcoReprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamcoReprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco',
      name: 'Priscilla R.',
      link: "http://google.com"
      },
      {
      avatar: Avatar3,
      rating: 5,
      text: 'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco',
      name: 'Mike G.',
      link: "http://google.com"
      },
      {
      avatar: Avatar4,
      rating: 5,
      text: 'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco',
      name: 'Mike G.',
      link: "http://google.com"
      },
      {
      avatar: Avatar5,
      rating: 5,
      text: 'Reprehenderit esse labore id veniam ut veniam non ex adipisicing amet ullamco',
      name: 'Mike G.',
      link: "http://google.com"
      },
  ],
};

const Arrow = () => (
  <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.84545 13.0307C6.93827 12.9357 6.99023 12.8081 6.99023 12.6753C6.99023 12.5424 6.93827 12.4149 6.84545 12.3199L1.65965 6.99997L6.84545 1.68116C6.93827 1.58613 6.99023 1.45856 6.99023 1.32572C6.99023 1.19288 6.93827 1.06531 6.84545 0.970277C6.80033 0.923938 6.74639 0.887108 6.6868 0.861959C6.62722 0.836811 6.5632 0.823855 6.49852 0.823855C6.43385 0.823855 6.36983 0.836811 6.31024 0.861959C6.25066 0.887108 6.19671 0.923938 6.1516 0.970277L0.636969 6.62857C0.540113 6.72794 0.485906 6.86121 0.485906 6.99997C0.485906 7.13873 0.540113 7.27201 0.636969 7.37137L6.1516 13.0297C6.19671 13.076 6.25066 13.1128 6.31024 13.138C6.36983 13.1631 6.43385 13.1761 6.49852 13.1761C6.5632 13.1761 6.62722 13.1631 6.6868 13.138C6.74639 13.1128 6.80033 13.076 6.84545 13.0297V13.0307Z" fill="black"/>
  </svg>
)
const PrevArrow = (props) => (
    <div onClick={props.onClick} className="reviews__arrow">
       <Arrow />
    </div>
);

const NextArrow = (props) => (
  <div onClick={props.onClick} className={classnames("reviews__arrow", "reviews__arrow_next")}>
     <Arrow />
  </div>
);

export const sliderOptions = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          dots: true,
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 1,
        }
      },
    ]
}
