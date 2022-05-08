import * as React from 'react';
import ImgAmazonLogo from '../../images/amazon-logo.png';

import './AmazonLinks.scss';

const data = {
  availableOn: 'Available on',
  bookVariants: [
    {
      price: '$35.00',
      type: 'Paperback',
      url: 'http://www.google.com',
    },
    {
      price: '$55.00',
      type: 'Hardcover',
      url: 'http://www.google.com',
    },
    {
      price: '$25.00',
      type: 'E-book',
      url: 'http://www.google.com',
    },
  ],
};

const AmazonLinks = () => {
  return (
    <div className="amazon-links d-inline-flex align-items-stretch text-left">
      <a
        href="http://www.google.com"
        className="amazon align-self-center"
        target="_blank"
        rel="noreferrer"
      >
        <span className="amazon__title">{ data.availableOn }</span>
        <img src={ImgAmazonLogo} alt="Amazon" />
      </a>

      <ul className="book-variants d-inline-flex align-items-stretch">
        {data.bookVariants.map(bookVariant => (
          <li
            key={bookVariant.type}
            className="book-variants__item align-self-center"
          >
            <a
              href={ bookVariant.url }
              className="book-variant"
              target="_blank"
              rel="noreferrer"
              key={ bookVariant.url }
            >
              <span className="book-variant__price">{ bookVariant.price }</span>
              <span className="book-variant__type">{ bookVariant.type }</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AmazonLinks;
