import * as React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Nav from '../Nav/Nav';
import TryItBtn from '../TryItBtn/TryItBtn';
import { ReactComponent as ImgLogo } from '../../images/mls_logo.svg';

import './Header.scss';

const data = {
  back: 'Back',
}

const Header = (props) => {
  const { onlyBackButton } = { ...props };

  const defaultHeader =
    <div className="header" id="top">
      <div className="content-container">
        <div className="header__inner d-flex align-items-center justify-content-between">
          <AnchorLink href="#top">
            <ImgLogo title="Machine Learning Simplified" />
          </AnchorLink>

          <div className="header__nav">
            <Nav />
          </div>

          <TryItBtn />
        </div>
      </div>
    </div>

  const onlyBackButtonHeader =
    <div className="header header--only-back">
      <div className="content-container d-flex align-items-center">
        <Link to="/" className="header__back-link">&larr; { data.back }</Link>
      </div>
    </div>

  return (
    <React.Fragment>
      { onlyBackButton ? onlyBackButtonHeader : defaultHeader }
    </React.Fragment>
  )
}

export default Header;
