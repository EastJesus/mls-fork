import * as React from 'react';
import ImgBook from '../../images/book-opened.png';
import ImgBook2x from '../../images/book-opened@2x.png';

import './SectionAboutBook.scss';

const data = {
  title: 'About this book',
  texts: [
    {
      p: 'The underlying goal of "Machine Learning Simplified" is to develop strong intuition into inner workings of ML. We use simple intuitive examples to explain complex concepts, algorithms or methods, as well as democratize all mathematics "behind the scenes".',
    },
    {
      p: 'After reading this book, you will understand everything that comes into the scope of supervised ML. You will be able to not only understand nitty-gritty details of mathematics, but also explain to anyone how things work on a high level.',
    },
  ]
};

const SectionAboutBook = () => {
  return (
    <div className="section-about-book row">
      <div className="col-12 col-md-6 mb-5 mb-md-0">
        <h2>{ data.title }</h2>

        {data.texts.map(text => (
          text.isUnsafe
            ? <p key={text.p} dangerouslySetInnerHTML={{__html: text.p}} />
            : <p key={text.p}>{text.p}</p>
        ))}
      </div>
      <div className="col-12 col-md-6">
        <div className="section-about-book__book">
          <img
            src={ImgBook}
            srcSet={`${ImgBook2x} 2x`}
            alt="About this book"
          />
        </div>
      </div>
    </div>
  )
}

export default SectionAboutBook;
