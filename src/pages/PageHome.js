import * as React from 'react';
import { Helmet } from 'react-helmet';
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
import SectionBookHighlights from '../components/SectionBookHighlights/SectionBookHighlights';

const data = {
  pageTitle: 'Machine Learning Simplified',
}

const App = () => {
  return (
    <div>
      <Helmet>
        <title>{ data.pageTitle }</title>
      </Helmet>

      <Header />

      <main className="content-container">
        <section className="section section--intro" id="intro">
          <SectionIntro />
        </section>

        <section className="section section--about-book" id="about-book">
          <SectionAboutBook />
        </section>

        <section className="section section--for-whom" id="for-whom">
          <SectionForWhom />
        </section>

        <section className="section section--read-first" id="read-first">
          <SectionReadFirst />
        </section>

        <section className="section section--about-author" id="about-author">
          <SectionAboutAuthor />
        </section>

        <section className="section section--reviews" id="reviews">
          <SectionReviews />
        </section>

        <section className="section section--what-the-internet-says" id="what-the-internet-says">
          <SectionWhatTheInternetSays />
        </section>

        <section className="section section--book-highlights" id="book-highlights">
          <SectionBookHighlights />
        </section>

        <section className="section section--faq" id="faq">
          <SectionFaq />
        </section>
      </main>

      <Footer hideBtn={false} />
    </div>
  )
}

export default App;