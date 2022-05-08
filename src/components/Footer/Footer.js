import * as React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Nav from '../Nav/Nav';
import TryItBtn from '../TryItBtn/TryItBtn';
import { ReactComponent as ImgLogo } from '../../images/mls_logo.svg';

import './Footer.scss';

const data = {
  copyright: '© 2022 MLS. All Rights Reserved.',
};

const Footer = (props) => {
  const { hideBtn } = { ...props };

  return (
    <footer className="footer">
      <div className="content-container">
        <div className="footer__content d-flex flex-column flex-md-row align-items-center align-items-md-start justify-content-between">
          <div className="mb-5 mb-md-0">
            <AnchorLink href="#top">
              <ImgLogo title="Machine Learning Simplified" />
            </AnchorLink>
          </div>

          <div>
            <div className="footer__nav d-none d-md-block"><Nav footer /></div>
            <div className="d-flex align-items-center justify-content-center">
              <a href="https://www.linkedin.com/in/5x12/" target="_blank" className="social social--lin"></a>
              <a href="https://github.com/5x12" target="_blank" className="social social--gh"></a>
              <a href="https://www.facebook.com/5x1200/" target="_blank" className="social social--fb"></a>
              <a href="https://www.instagram.com/5x12/" target="_blank" className="social social--ins"></a>
            </div>
            <div className="copy">{ data.copyright }</div>
          </div>

          <div className="d-none d-md-block">
            { hideBtn ? '' : <TryItBtn /> }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
