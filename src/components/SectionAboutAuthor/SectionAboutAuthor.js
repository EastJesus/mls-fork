import * as React from 'react';
import ImgAuthor from '../../images/author.png';
import ImgAuthor2x from '../../images/author@2x.png';

import './SectionAboutAuthor.scss';

const data = {
  title: 'About this author',
  texts: [
    {
      p: 'Hi there. My name is Andrew. I am an MLOps Engineer by day and an enthusiastic STEM tutor by night.',
    },
    {
      p: 'While teaching ML to my students, it always occured to me that the materials I managed to find on the introduction to ML were either rife with academic trilogies, filled with theorems and designed for experienced researchers, or were sprinkled with fishy fairy tales about artificial intelligence, data-science magic, and jobs of the future. I tried to fix this problem by writing the "Machine Learning Simplified" book that makes machine learning both simple to understand and fun to read about!',
    },
    {
      p: 'Learn more about me on <a href="https://www.awolf.io" target="_blank">awolf.io</a> <br> or follow me on <a href="https://www.linkedin.com/in/5x12/" target="_blank">LinkedIn</a>, <a href="https://www.instagram.com/5x12/" target="_blank">Instagram</a> or <a href="https://github.com/5x12" target="_blank">Github</a>.',
      isUnsafe: true,
    },
  ],
};

const SectionAboutAuthor = () => {
  return (
    <div className="section-about-author">
      <h2 className="section-about-author__title">{ data.title }</h2>

      <div className="section-about-author__photo">
        <img
          src={ImgAuthor}
          srcSet={`${ImgAuthor2x} 2x`}
          alt="Author"
        />
      </div>

      <div className="section-about-author__text">
        {data.texts.map(text => (
          text.isUnsafe
            ? <p key={text.p} dangerouslySetInnerHTML={{__html: text.p}} />
            : <p key={text.p}>{text.p}</p>
        ))}
      </div>
    </div>
  )
}

export default SectionAboutAuthor;