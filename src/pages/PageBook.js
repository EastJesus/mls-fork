import * as React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import SectionBookPresentation from '../components/SectionBookPresentation/SectionBookPresentation';
import SectionTableOfContents from '../components/SectionTableOfContents/SectionTableOfContents';
import SectionGit from '../components/SectionGit/SectionGit';
import ImgBookBig from '../images/book-big.png';

const data = {
  pageTitle: 'Machine Learning Simplified',
}

const App = () => {
  return (
    <div>
      <Helmet>
        <title>{ data.pageTitle }</title>

        <meta property='og:title' content='Machine Learning Simplified: A gentle introduction to supervised learning'/>
        <meta property='og:image' content={ImgBookBig}/>
        <meta property='og:description' content='Machine Learning Simplified: A gentle introduction to supervised learning'/>
        <meta property='og:url' content='//www.---' />
      </Helmet>

      <Header onlyBackButton />

      <div className="content-container">
        <section className="section section--book-presentation">
          <SectionBookPresentation />
        </section>

        <section className="section section--table-of-contents">
          <SectionTableOfContents />
        </section>

        <section className="section section--git">
          <SectionGit />
        </section>

        <section className="section section--git">
          <p><a href="https://forms.gle/9kmvqewS6CHQwU7t8" target="_blank"><u><b>Leave your email to get notified</b></u></a> when the second part of the Machine Learning Simplified book is published.   You can also support the author and get pdf through <a href="https://leanpub.com/themlsbook" target="_blank"><u><b>Leanpub</b></u></a>.</p>
        </section>
      </div>

      <Footer hideBtn />
    </div>
  )
}

export default App;