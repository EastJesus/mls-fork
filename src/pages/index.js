import * as React from 'react';
import { Helmet } from "react-helmet"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionIntro from '../components/SectionIntro/SectionIntro';
import SectionAboutBook from '../components/SectionAboutBook/SectionAboutBook';
import SectionForWhom from '../components/SectionForWhom/SectionForWhom';
import SectionReadFirst from '../components/SectionReadFirst/SectionReadFirst';
import SectionAboutAuthor from '../components/SectionAboutAuthor/SectionAboutAuthor';
import SectionReviews from '../components/SectionReviews/SectionReviews';
import SectionFaq from '../components/SectionFaq/SectionFaq';
import SectionWhatTheInternetSays from '../components/SectionWhatTheInternetSays/SectionWhatTheInternetSays';

import '../styles/index.scss';

const data = {
  title: 'Machine Learning Simplified',
}

const IndexPage = () => {
  return (
    <div>
      <Helmet>
        <title>{ data.title }</title>
        <meta charset="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="content-container">
        <Header />

        <div className="section section--intro" id="intro">
          <SectionIntro />
        </div>

        <div className="section section--about-book" id="about-book">
          <SectionAboutBook />
        </div>

        <div className="section section--for-whom" id="for-whom">
          <SectionForWhom />
        </div>

        <div className="section section--read-first" id="read-first">
          <SectionReadFirst />
        </div>

        <div className="section section--about-author" id="about-author">
          <SectionAboutAuthor />
        </div>

        <div className="section section--what-the-internet-says" id="what-the-internet-says">
          <SectionWhatTheInternetSays />
        </div>

        <div className="section section--reviews" id="reviews">
          <SectionReviews />
        </div>

        <div className="section section--faq" id="faq">
          <SectionFaq />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default IndexPage;
