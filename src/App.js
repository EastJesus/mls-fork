import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './ScrollToTop';
import PageBook from './pages/PageBook';
import PageHome from './pages/PageHome';

const data = {
  title: 'Machine Learning Simplified',
}

const App = () => {
  return (
    <Router basename="/">
      {/* <ScrollToTop> */}
        <Helmet>
          <title>{ data.title }</title>
          <meta charset="utf-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
        </Helmet>

        <Switch>
          <Route exact path="/read" component={PageBook} />
          <Route exact path="/" component={PageHome} />
        </Switch>
      {/* </ScrollToTop> */}
    </Router>
  )
}

export default App;